import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './cartwidget.css';
  
const CartWidget = () => {
    return (    
        <div className="cartStyle">
            <FiShoppingCart />
        </div>
    )
};

export default CartWidget;