import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from '../itemList/ItemList';
import { getCatalog } from '../../backend/catalog'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [state, setState] = useState([]);
    const { categoryId } = useParams();

    useEffect(()=> {  //Al cambiar el estado local, el componente se reenderiza y entra en loop [la promise siempre se deja para el final]
        getCatalog().then((result) => {
        if(categoryId) {
          const filter = result.filter(products => products.categoria.some(targets => targets.catId === categoryId))
          filter.length && setState(filter)
        } else {
          setState(result)
        }
      })
      return () => setState([]) 
    }, [categoryId])

    return (
                    <ItemList  products={state}/>
    )
}

export default ItemListContainer;