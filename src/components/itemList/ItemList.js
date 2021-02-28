import React from 'react';
import Item from '../item/Item';
import './itemList.css';

const ItemList = ({products}) => {
    
    return (
        <div className="itemMapeado">
            <div className="grid">
                {products.map(i => <Item key={i.id} itemmapeado={i}/>)}
            </div>
        </div>
    )
}
    
export default ItemList;