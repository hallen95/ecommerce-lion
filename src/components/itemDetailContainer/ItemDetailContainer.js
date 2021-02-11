import React, {useState, useEffect } from 'react';
import { getProductById } from '../../backend/catalog';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader'
import { getFirestore } from '../../firebase/Index';
                
function ItemDetailContainer() {

    const [item, setItem] = useState({}); 
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams();

    // useEffect(()=> {
    //     getProductById().then((productos)=>{
    //         setItem(productos[id -1])
    //     })
    // }, [id])
    console.log(itemId);    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(itemId);
        setLoading(true);
        item.get().then((doc) =>  {
            if (!doc.exists) {
                console.log('el item no existe');
                return;
            }
            console.log('item found!')
            setItem({ id: doc.id, ...doc.data()});
        }).catch((error) => {console.log(`error en ${error}`)})
        .finally(() => {
            setLoading(false);
        })
    }, [itemId])
    return (
                    <>
                    {item ? 
                    <ItemDetail getItem={item} /> 
                    : <Loader/>}
                    </>
    );
}
export default ItemDetailContainer;