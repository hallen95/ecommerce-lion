import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';
import { getFirestore } from '../../firebase';
import NotFound from '../404NotFound/NotFound';
                
function ItemDetailContainer() {

    const [item, setItem] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [ notFound, setNotFound ] = useState(false);
    const { itemId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const item = itemCollection.doc(itemId);
        item.get().then((doc) =>  {
            if (!doc.exists) {
                setNotFound(true);
                return;
            }
            setItem({ id: doc.id, ...doc.data()});

        }).catch((error) => {console.log(`error en ${error}`)})
        .finally(() => {
            setLoading(false);
        })
    }, [itemId])

    return (
        <React.Fragment>
            {loading && !notFound ? <span style={{display:'flex', justifyContent:'center', fontSize:"40px"}}><Loader/></span>
            : !loading && notFound ? <NotFound/>
            : <ItemDetail loading={loading} getItem={item} /> }
        </React.Fragment>
    );
}
export default ItemDetailContainer;