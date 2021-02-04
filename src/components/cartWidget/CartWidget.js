import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './cartwidget.css';

import { useCartContext } from '../../CartContext';
  
const CartWidget = () => {
    return (    
        <div className="cartStyle">
            <FiShoppingCart />
        </div>
    )
};

export default CartWidget;