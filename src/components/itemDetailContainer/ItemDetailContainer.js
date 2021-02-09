import React, {useState, useEffect } from 'react';
import { getProductById } from '../../backend/catalog';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader'
                
function ItemDetailContainer() {

    const [item, setItem] = useState({}); 
    const { id } = useParams();

    useEffect(()=> {
        getProductById().then((productos)=>{
            setItem(productos[id -1])
        })
    }, [id])

    return (
                    <>
                    {item ? 
                    <ItemDetail getItem={item} id={id} /> 
                    : <Loader/>}
                    </>
    );
}
export default ItemDetailContainer;