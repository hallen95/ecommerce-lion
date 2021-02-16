import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase'
import firebase from "firebase/app"
import CartForm from '../CartForm/CartForm'

function CartOrder({cart, total}) {
    const [userInfo, setUserInfo] = useState()
    const [order, setOrder] = ({})
    const [orderId, setOrderId] = useState("")

    useEffect(() => {
        setOrder({
            buyer: userInfo,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total 
        })
    },[total])
    
    const getInfo = (user) => {
        setUserInfo(user);
    }

    const generateOrder = () => {
        const db = getFirestore()
        const orders = db.collection("orders");
        // const newOrder = {
        //     buyer: userInfo,
        //     items: cart,
        //     date: firebase.firestore.Timestamp.fromDate(new Date()),
        //     total: total
        // }
        
        orders.add(order).then(({id}) => {
            setOrderId(id)
        }).catch(error => console.log("Ha habido un error:", error))
    }
    console.log("user info", userInfo);
    
    useEffect(() => {
        userInfo && generateOrder()
    }, [userInfo])

    // useEffect(() => {
    //     orderId && updateStock()
    // },[orderId])

    return (
        <div>
            <CartForm getInfo={getInfo} orderId={orderId}  />
        </div>
    )
}

export default CartOrder
