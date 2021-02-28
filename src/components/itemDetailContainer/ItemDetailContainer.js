import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';
import { getFirestore } from '../../firebase';
import NotFound from '../404NotFound/NotFound';
                
function ItemDetailContainer() {

    const [item, setItem] = useState({}); 
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    const [ notFound, setNotFound ] = useState(false);
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(itemId);
        item.get().then((doc) =>  {
            if (!doc.exists) {
                setNotFound(true);
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
                    {loading && !notFound ? <Loader/>
                    : !loading && notFound ? <NotFound/>
                    : <ItemDetail loading={loading} getItem={item} /> 
                    }
                    </>
    );
}
export default ItemDetailContainer;