import React, {useState, useEffect } from 'react';
import { getProductById } from '../../backend/catalog';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';

                
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
                    {item.hasOwnProperty("id") ? 
                    <ItemDetail getItem={item} id={id} /> 
                    : <h2>cargando</h2>
                    }   
                    </>
    );
}
export default ItemDetailContainer;