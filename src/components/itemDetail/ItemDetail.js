import React, { useState } from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import useCartContext from '../../context/CartContext'
import ModalCart from '../modalCart/ModalCart'
    

const ItemDetail = ({getItem}) => {
    const { cart, setCart } = useCartContext();
    
    const { addItems, setAddItems } = useCartContext();

    const [modal, setModal] = useState(false);

    const handleModal = (contador) => {
        setModal(true)
        setAddItems(contador)
    }

    return (
        <React.Fragment>
            <div className="itemDetailStyle"><h2>
                {getItem.nombre}
            </h2>
            <img  src={getItem.imagen_detail} alt="foto del producto Terrnova de Lion"/>
            <div>{getItem.descripcion}</div>
            </div>
            <ItemCount min={1} stock={getItem} handleModal={handleModal}/>
            <div>
                {modal ? 
                 <ModalCart 
                    getItem={getItem} setModal={setModal} modal={modal}
                    addItems={addItems} setAddItems={setAddItems} 
                    cart={cart} setCart={setCart} 
                     />
                : null}
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;
