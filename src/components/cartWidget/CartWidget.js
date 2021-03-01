import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './cartwidget.css';
import useCartContext from '../../context/CartContext';

const CartWidget = () => {
    
    const { cart, cartCounter } = useCartContext();
    const cartCounterWidget = cartCounter();
    
    cart.length && cartCounter();

    return (
        <Link to="/cart">
            <div className="cartStyle">
                    <FiShoppingCart /> 
                    <p> items:{cartCounterWidget ? cartCounter() : 0} </p>
            </div>
        </Link>
    )
};

export default CartWidget;