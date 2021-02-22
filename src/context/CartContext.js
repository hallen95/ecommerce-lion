import React, {createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [addItems, setAddItems] = useState(0)

    // {* CART VIEW *}
    const addProduct = (getItem, addItems) => {
      const purchase = {
       item: {
              itemId: getItem.id,
              name: getItem.title,
              precio: getItem.price,
              foto: getItem.tumbnail
          },
          quantity: addItems 
        }
        handleDuplicate(purchase, purchase.item.itemId, addItems);
        cartCounter();
    }

    // {* CART VIEW *}
    const searchIdInCart = (itemId) => {
      return cart.find(ticket => ticket.item.itemId === itemId)  

    }

    // {* CART VIEW *}
    const addMoreToCart = (itemId, addItems) => {
      searchIdInCart(itemId).quantity += addItems
    }

    // {* CART VIEW *}
    const handleDuplicate = (purchase, itemId, addItems) => {
      console.log("carrito longitud", cart.length)
      cart.length && searchIdInCart(itemId) ? addMoreToCart(itemId, addItems) : setCart([...cart, purchase])
    }

    // {* CART VIEW *}
    const deleteProduct = () => {
        setCart([])
    }

    const total = () => { 
      let subtotal = []
      let sum = 0
      cart.map(purchase => {
          return subtotal.push(purchase.item.precio * purchase.quantity)
      })
      subtotal.length < 2 ? sum = (subtotal[0])
      : subtotal.reduce((accumulator, currentValue) => {
          return sum = (accumulator + currentValue)
      })
      return sum
    }

  // {* CART VIEW *}
    const removeFromCart = (itemId) => {
        const filtered = cart.filter(purchase => // crea un nuevo array con todos menos el buscado
            purchase.item.itemId !== itemId
        )
        setCart(filtered)
    }

    // {* CART WIDGET/COUNTER *}
    const cartCounter = () => {
        return cart.reduce((acc, purchase) => {
            return acc + purchase.quantity
        },0)
    }

    return (<CartContext.Provider 
              value={{ cart, setCart, addItems, setAddItems, 
              addProduct, addMoreToCart, deleteProduct,
               total, removeFromCart, cartCounter }}>
                  {children}
            </CartContext.Provider>)
  }

  export default useCartContext;