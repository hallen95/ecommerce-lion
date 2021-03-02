import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';

const CartWidget = () => {
    
    const { cart, cartCounter } = useCartContext();
    const cartCounterWidget = cartCounter();
    
    cart.length && cartCounter();

    return (
        <Link to="/cart">
            <div style={{fontSize: "150%", color:"black", margin:"0 5px 20px"}}>
                    <FiShoppingCart /> 
                    <span> items:{cartCounterWidget ? cartCounter() : 0} </span>
            </div>
        </Link>
    )
};

export default CartWidget;