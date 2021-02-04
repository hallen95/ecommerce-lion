import React, {createContext, useContext, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const addProduct = (item, quantity) => {
      //
    }
    const deleteProduct = itemId => {
      //
    }
    const getItemCount = () => {
      return 10;
    }

    return <CartContext.Provider value={{ items, addProduct, deleteProduct, getItemCount }}>
                {children}
            </CartContext.Provider>
  }

  export default useCartContext;