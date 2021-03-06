import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useCartContext from '../../context/CartContext';

const OrderModal = ({orderModal, setOrderModal, setFormData, orderId, setShowForm}) => {

  const { deleteProduct } = useCartContext();

  const handleClose = () => {
      setOrderModal(false);
      setFormData({
          name: '',
          surname: '',
          phone: '',
          email: '',
          emailVerification: '',
      });
      setShowForm(false);
      deleteProduct();
  }

  return (
    <React.Fragment>
      <Modal show={orderModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Muchas gracias por su compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Codigo generado automático, por favor mantengalo consigo: ${orderId}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default OrderModal;