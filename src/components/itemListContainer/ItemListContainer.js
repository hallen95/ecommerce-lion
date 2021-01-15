import React from 'react';
import './itemlistcontainer.css';
import ItemCount from '../itemCount/ItemCount';


const ItemListContainer = () => {

    return (
        <div>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}

export default ItemListContainer;