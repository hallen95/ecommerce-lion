import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from '../itemList/ItemList';
import { getCatalog } from '../../backend/catalog'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/Index'
import  Loader  from '../loader/Loader'

const ItemListContainer = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0){
          console.log('no results!')
        }
        setState(querySnapshot.docs.map(doc => doc.data()));
      }).catch((error) => {
        console.log(`error en ${error} buscando`);
      }).finally(() => {
        setLoading(false);
      });
    }, [categoryId])

    console.table(state)

    // useEffect(()=> {
    //     getCatalog().then((result) => {
    //     if(categoryId) {
    //       const filter = result.filter(products => products.categoria.some(targets => targets.catId === categoryId))
    //       filter.length && setState(filter)
    //     } else {
    //       setState(result)
    //     }
    //   })
    //   return () => setState([]) 
    // }, [categoryId])

      useEffect(()=> {
        setTimeout(()=> {
          setLoading(true)
        }, 2000)
      },[loading])
      
    return ( 
              <>
              <ItemList  products={state}/>
              {!state.length &&     
                <Loader/>}
              </>
    )
}

export default ItemListContainer;