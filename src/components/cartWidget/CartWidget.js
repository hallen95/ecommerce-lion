import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './cartwidget.css';

import useCartContext from '../../context/CartContext'

const CartWidget = () => {
    const { cart } = useCartContext();

    let totalItems = [];
    let sum = 0

    const cartCounter = () => {
        cart.map(purchase => {
            return totalItems.push(purchase.quantity)
        })
        totalItems.length < 2 ?
        sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
    }
    
    cart.length && cartCounter()

    console.log("Cart:", cart)
    console.log("Array cantidad:", totalItems)
    console.log("Total", sum)

    return (    
        <Link to="/cart">
        <div className="cartStyle">
            <FiShoppingCart />
            <p>Ítems: {sum}</p>
        </div>
        </Link>
    )
};

export default CartWidget;