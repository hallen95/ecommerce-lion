import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext'

const ModalCart = ({getItem, setModal, modal, addItems, setAddItems, cart, setCart, contador}) => {
// recibir el contexto del useCart y el cart 
const { addProduct } = useCartContext();
const [goCart, setGoCart] = useState(false)

  const handleClose = () => {
    setAddItems(0);
    setModal(false);
  }

//   useEffect(() => {
//     setPurchase(
//     {   item: {
//             productoId: getItem.id,
//             name: getItem.nombre,
//             precio: getItem.precio,
//         },
//         quantity: addItems 
//     })
// }, [getItem, addItems])

  const confirm = () => {
    addProduct(getItem, addItems)
    setTimeout(() => {
        setGoCart(true) 
    }, 1000);
  }
   
  return (
    <>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirma la compra de este Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_info">
                    <h1>{getItem.title}</h1>
                    <h2>{getItem.marca}</h2>
                    <p>
                      AR$ {getItem.price}<br/>
                      se agregará la cantidad de: {addItems}<strong> productos</strong><br/>
                      por el precio de: ARS { addItems * getItem.price }
                    </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button> */}
          { !goCart &&
              <Button variant="primary" onClick={confirm}>
                confirmar añadir al carrito por {addItems}
              </Button>
          }
          { goCart &&
            <>
            <Link to={'/cart'}>
              <Button variant="primary">ir al carrito</Button>  
            </Link> 
            </>
          }          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCart;