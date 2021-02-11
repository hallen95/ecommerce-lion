import React, {createContext, useContext, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [addItems, setAddItems] = useState(0)

    const addProduct = (itemId) => {
      return cart.find(ticket => ticket.item.itemId === itemId)  
    }

    const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
        addProduct(itemId).quantity += addItems
    }

    const agregarProducto = (items, quantity) => {
      setCart([...cart, {items, quantity}])
    }

    const deleteProduct = itemId => {
      //
    }
    //CartWidget
    const cartCounter = () => {
// o sea que a esta altura cart ya recibe el purcharse
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
    return (<CartContext.Provider 
              value={{ cart, setCart, addItems, setAddItems, 
              addProduct, addMoreToCart, deleteProduct,
               total, cartCounter }}>
                  {children}
            </CartContext.Provider>)
  }

  export default useCartContext;