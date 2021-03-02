import React from 'react';
import Item from '../item/Item';
import './itemList.css';

const ItemList = ({products}) => {
    
    return (
        <React.Fragment>
        <div className="item__list__headspace"/>
        <div className="item__list__container">
            <div className="item__list__grid">
                {products.map(i => (<Item key={i.id} itemmapeado={i}/>))}
            </div>
        </div>
        </React.Fragment>
    )
}
    
export default ItemList;