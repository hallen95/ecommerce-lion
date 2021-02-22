import React, { useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './cartwidget.css';

import useCartContext from '../../context/CartContext'

const CartWidget = () => {
    const { cart, cartCounter } = useCartContext();
    
    const cartCounterWidget = cartCounter();
    
    // cart.length && cartCounter();

    useEffect(() => {
        console.log('estoy escuchando')
    }, [cartCounterWidget])

    return (
        <Link to="/cart">
            <div className="cartStyle">
                    <FiShoppingCart /> 
                    <p> items:{cartCounterWidget ? cartCounterWidget : 0} </p>
            </div>
        </Link>
    )
};

export default CartWidget;