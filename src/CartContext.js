import React, {createContext, useContext, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [stock, setStock] = useState() //se asigna valor inicial en ItemDetail

    const [addItems, setAddItems] = useState(0)

    const addProduct = (itemId) => {
      return cart.find(ticket => ticket.item.itemId === itemId)  
    }
    const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
        addProduct(itemId).quantity += addItems
  }
    const deleteProduct = itemId => {
      //
    }
    const getItemCount = () => {
      //
    }

    return (<CartContext.Provider value={{ cart, setCart, stock, setStock, addItems, setAddItems, addProduct, addMoreToCart, deleteProduct, getItemCount }}>
                {children}
            </CartContext.Provider>)
  }

  export default useCartContext;