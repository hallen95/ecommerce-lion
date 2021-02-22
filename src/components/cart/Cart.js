import React, { useState } from 'react'
import useCartContext from '../../context/CartContext'
import { BsFillXCircleFill } from "react-icons/bs"
import './cart.css'
import CartOrder from '../CartOrder/CartOrder'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Cart() {
    const [ user, setUser ] = useState({})
    const [showForm, setShowForm] = useState(false)

    const { cart, removeFromCart, total } = useCartContext();

    const totalPrice = total()

    const order = () => { 
        setShowForm(true)
    }

    const handleUser = user => {
        setUser(user)
    }

    return (
    <div className="contendor__carrito" style={{height: cart.length > 2 && "100%"}}>
                { !cart.length &&
                <div className="cartview__display">
                <h1 className="cartview__title">Mi Carrito</h1>
                <div className="grid__banner">
                    <span className="banner__product">Producto</span>
                    <span></span>
                    <span>Precio</span>
                    <span>Cantidad</span>
                    <span>Subtotal</span>
                </div>
                <span>Su carrito está vacío</span>
                <Link to ={'/'}><span>Haga click para volver al menú</span></Link>
                </div>
                }
                { cart.length &&
                <div className="cartview__display">
                <h1 className="cartview__title">Mi Carrito</h1>
                <div className="grid__banner">
                    <span className="banner__product">Producto</span>
                    <span></span>
                    <span>Precio</span>
                    <span>Cantidad</span>
                    <span>Subtotal</span>
                </div>
                <ul className="grid__itemlist">
                    { cart.map((purchase) => {
                        return (
                        <li className="itemlist__item" key={purchase.item.itemId} >
                            <div className="item__data">
                                <div className="data__main">
                                    <h2>{purchase.item.name}</h2>
                                    <h3>{purchase.item.precio}</h3>
                                </div>
                            </div>
                            <div className="item__pricee">
                                <span>AR$ {purchase.item.precio}</span>
                            </div>
                            <div className="item__pricee">
                                <span>{purchase.quantity}</span>
                            </div>
                            <div className="item__subtotal">
                                <span>AR$ {purchase.item.precio * purchase.quantity}</span>
                            </div>
                            <div className="item__pricee">
                                <img src={purchase.item.foto} alt="foto del producto"/>
                            </div>
                            <div className="item__remove">
                                <span onClick={() => removeFromCart(purchase.item.itemId)}><BsFillXCircleFill/></span>
                            </div>
                        </li>
                        )
                    })
                    }
                </ul>
            </div>         
            }
                <div className="controls__total">
                    <div className="total__row">
                        <span>Subtotal:</span> <span className="span__price">AR$ {totalPrice}</span>
                    </div>
                    <div className="total__row">
                        <span>Total:</span> <span className="span__price">AR$ {totalPrice}</span>
                    </div>
                    <Button variant="warning" className="cartview__button purchase" onClick={() => order()}>Iniciar compra</Button>
                </div>
            { showForm && <CartOrder cart={cart} total={totalPrice} onValidate={handleUser} />}
        </div>
    )
}

export default Cart
