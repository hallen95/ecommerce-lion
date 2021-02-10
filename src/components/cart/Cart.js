import React, { useState } from 'react'
import useCartContext from '../../context/CartContext'
import { BsDash, BsPlus, BsFillXCircleFill } from "react-icons/bs"
import './cart.css'

function Cart() {
    const { cart } = useCartContext();
    const {addItems} = useCartContext();
    const { edit} = useCartContext();
    const { editing, save, sum, subst, total } = useCartContext();
    console.log(cart)

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
                        <li className="itemlist__item" key={purchase.item.productoId} >
                            <div className="item__data">
                                <div className="data__main">
                                    <h2>{purchase.item.name}</h2>
                                    <h3>{purchase.item.precio}</h3>
                                </div>
                            </div>
                            <div className="item__edit">
                    
                                { !edit ? <a onClick={editing} >Editar</a> 
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                : <a onClick={save}>Guardar</a> }
                            </div>
                            <div className="item__pricee">
                                <span>AR$ {purchase.item.precio}</span>
                            </div>
                            <div className="item__quantity">
                                { edit &&
                                    <div className="cart__counter">
                                    <button className="button button-cart" onClick={subst}>
                                        <BsDash/>
                                    </button>
                                    <span>{addItems}</span>
                                    <button className="button button-cart" onClick={sum} >
                                        <BsPlus/>
                                    </button>
                                </div>
                                }
                                { !edit &&
                                    <span>{purchase.quantity}</span>}
                            </div>
                            <div className="item__subtotal">
                                <span>AR$ {purchase.item.precio * purchase.quantity}</span>
                            </div>
                            <div className="item__remove">
                                <span><BsFillXCircleFill/></span>
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
                        <span>Subtotal:</span> <span className="span__price">AR$ {total()}</span>
                    </div>
                    <div className="total__row">
                        <span>Total:</span> <span className="span__price">AR$ {total()}</span>
                    </div>
                </div>
        </div>
    )
}

export default Cart
