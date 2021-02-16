import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './cartwidget.css';

import useCartContext from '../../context/CartContext'

const CartWidget = () => {
    const { cart, cartCounter } = useCartContext();
    
    cart.length && cartCounter()

    const cartCounterWidget = cartCounter();

    return (
        <Link to="/cart">
            <div className="cartStyle">
                    <FiShoppingCart /> items:
                    {cartCounterWidget ? cartCounterWidget : 0}
            </div>
        </Link>
    )
};

export default CartWidget;