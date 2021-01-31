import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from '../itemList/ItemList';
import imagenes from '../../photos/Imagenes'
import { useParams } from 'react-router-dom'

const productos = [
    {
        id: 1,
        nombre: 'Original Finish',
        marca: 'Ternnova',
        imagen: imagenes.img1, 
        precio: 1250,
        categoria: 'shampoo'
    },

    {
        id: 2,
        nombre: 'Gel ExtraGloss',
        marca: 'Ternnova',
        imagen: imagenes.img3,
        precio: 1250,
        categoria: 'shampoo'
    },

    {   id: 3,
        nombre: 'Iron Hunter',
        marca: 'Ternnova',
        imagen: imagenes.img2,
        precio: 1200,
        categoria: 'desengrasante'
    },

    {   id: 4,
        nombre: 'Petroleum',
        marca: 'Ternnova',
        imagen: imagenes.img4,
        precio: 1400,
        categoria: 'desengrasante'
    }
]

const ItemListContainer = () => {
    const [estado, setState] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const call = new Promise((response, reject) => {
            setTimeout(() => {
                response(productos);
            }, 2000)
        })

        call.then((productos) => {
            setState(productos);
        })    
    }, [] )


    return (
                    <ItemList  products={estado}/>
    )
}

export default ItemListContainer;