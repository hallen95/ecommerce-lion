import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import  Loader  from '../loader/Loader';

const ItemListContainer = () => {
    const [state, setState] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const { categoryId } = useParams();

    useEffect(() => {
      const db = getFirestore();
      let itemCollection;
      if(categoryId) {
        itemCollection = db.collection('items').where('categoryId', '==', categoryId)
      }
      else{
        itemCollection = db.collection('items');
      }

      itemCollection.get().then((querySnapshot) => {
          querySnapshot.size === 0 && console.log('error no hay items')
          let result = querySnapshot.docs.map((doc) => {
            return ({ 
              id: doc.id,
              ...doc.data()
            })
          })
          setState(result);
          result && setLoading(true)
        });
        return () => {
          setLoading(false);
          setState([])
        }
    }, [categoryId])

    return ( 
              <>
              {!loading ? <Loader/> : <ItemList products={state}/>
              }
              </>
    )
}

export default ItemListContainer;