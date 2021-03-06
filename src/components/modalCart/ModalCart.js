import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';

const ModalCart = ({ getItem, setModal, modal, addItems, setAddItems, setStock }) => {

  const [goCart, setGoCart] = useState(false)
  const { addProduct } = useCartContext();

  const handleClose = () => {
    setAddItems(0);
    setModal(false);
  }

  const confirm = () => {
    setStock(getItem.stock - addItems)
    addProduct(getItem, addItems)
    setTimeout(() => {
        setGoCart(true) 
    }, 1000);
  }
    
  return (
      <Modal show={modal} onHide={handleClose} style={{marginTop:'200px'}}>
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
  )
}

export default ModalCart;