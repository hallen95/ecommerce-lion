import React, {createContext, useContext, useState } from 'react'

export const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [addItems, setAddItems] = useState(0)
    const [edit, setEdit] = useState(false)

    const addProduct = (itemId) => {
      return cart.find(ticket => ticket.item.itemId === itemId)  
    }

    const addMoreToCart = (itemId, addItems) => {  //mergeDuplicate -> CartModal.js
        addProduct(itemId).quantity += addItems
    }

    const deleteProduct = itemId => {
      //
    }

    const editing = () => {
        // ??? acá tendría que usar algo que detecte el bookId para cada index del map
        setEdit(true)
    }

    const save = () => {
      setEdit(false)
      setAddItems(addItems)
   }

    const sum = () => {
      setAddItems(addItems + 1)
    } 

    const subst = () => {
      setAddItems(addItems - 1)
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
              editing, save, sum, subst, edit, total }}>
                  {children}
            </CartContext.Provider>)
  }

  export default useCartContext;