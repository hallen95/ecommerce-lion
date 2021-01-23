import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemCount from '../itemCount/ItemCount';
import ItemList from '../itemList/ItemList';


const ItemListContainer = () => {

const [estado, setState] = useState();

useEffect(() => {
    const call = new Promise((response, reject) => {
        setTimeout(() => {
            response(productos);
        }, 2000)
    })

    call.then((productos) => {
        console.log(productos);
        setState(productos);
    })    
}, [])

const productos = [
    {
        id: 1,
        nombre: 'Original Finish',
        marca: 'Ternnova',
        precio: 1250
    },

    {
        id: 2,
        nombre: 'Gel acondicionador ExtraGloss',
        marca: 'Ternnova',
        precio: 1250
    },

    {   id: 3,
        nombre: 'Iron Hunter',
        marca: 'Ternnova',
        precio: 1200
    },

    {   id: 4,
        nombre: 'Petroleum',
        marca: 'Ternnova',
        precio: 1400
    }
]

    return (
        <div>
            <ItemCount initial={1} stock={5}/>
            <ItemList  products={estado}/>
        </div>  
    )
}

export default ItemListContainer;