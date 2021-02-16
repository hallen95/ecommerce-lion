import React, {createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [addItems, setAddItems] = useState(0)

    // {* CART VIEW *}
    const addProduct = (getItem, addItems) => {
      let purchase = {
       item: {
              itemId: getItem.id,
              name: getItem.title,
              precio: getItem.price,
              foto: getItem.tumbnail
          },
          quantity: addItems 
        }
        handleDuplicate(purchase, purchase.item.itemId, addItems)
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
  const removeFromCart = (itemId) => { //CartView
    const filtered = cart.filter(purchase => // crea un nuevo array con todos menos el buscado
        purchase.item.itemId !== itemId
    )
    setCart(filtered)
}
    // {* CART WIDGET/COUNTER *}
    const cartCounter = () => {
      let totalItems = [];
      let sum = 0;
        cart.map(purchase => {
            return totalItems.push(purchase.quantity)
        });
        totalItems.length < 2 ?
        sum = totalItems[0]
        :
        totalItems.reduce((accumulator, currentValue) => {
            return sum = accumulator + currentValue
        })
        return sum;
    }
    return (<CartContext.Provider 
              value={{ cart, setCart, addItems, setAddItems, 
              addProduct, addMoreToCart, deleteProduct,
               total, removeFromCart, cartCounter }}>
                  {children}
            </CartContext.Provider>)
  }

  export default useCartContext;