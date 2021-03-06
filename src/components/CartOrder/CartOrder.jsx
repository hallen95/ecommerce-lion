import React, { useEffect, useState } from 'react';
import { getFirestore } from '../../firebase';
import firebase from "firebase/app";
import "@firebase/firestore";
import CartForm from '../CartForm/CartForm';

function CartOrder({cart, total, setShowForm}) {

    const [userInfo, setUserInfo] = useState();
    const [orderId, setOrderId] = useState("");

    const getInfo = (user) => setUserInfo(user);

    const generateOrder = () => {
        const db = getFirestore()
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        };
        orders.add(newOrder).then(({id}) => {
            setOrderId(id)
        }).catch(error => console.log("Ha habido un error:", error));
    };

    const updateStock = () => {
        (async function () {
            const db = getFirestore()
            const itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), "in", cart.map(purchase => purchase.item.itemId))

            const query = await itemsToUpdate.get()  
            const batch = db.batch()

            const outOfStock = [];
            query.docs.forEach((docSnapshot, index) => {
                if(docSnapshot.data().stock >= cart[index].quantity) {
                    batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[index].quantity });
                } else {
                    outOfStock.push({...docSnapshot.data(), id: docSnapshot.id});
                }
            })
            outOfStock.length === 0 && await batch.commit();
        })()
    };

    useEffect(() => {
        userInfo && generateOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo])

    useEffect(() => {
        orderId && updateStock()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[orderId])

    return (
            <CartForm getInfo={getInfo} orderId={orderId} setShowForm={setShowForm} />
    )
}

export default CartOrder;
