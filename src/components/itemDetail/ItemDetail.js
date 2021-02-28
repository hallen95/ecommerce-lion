import React, { useState } from 'react'; // rfc 
import './itemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import useCartContext from '../../context/CartContext';
import ModalCart from '../modalCart/ModalCart';
    

const ItemDetail = ({getItem}) => {
    const { cart, setCart } = useCartContext();
    
    const { setAddItems } = useCartContext();

    const [modal, setModal] = useState(false);

    const handleModal = (contador) => {
        setModal(true)
        setAddItems(contador)
    }

    return (
        <React.Fragment>
            <div className="itemDetailStyle"><h2>
                {getItem.title}
            </h2>
            <img  src={getItem.photodescription} alt="foto del producto Terrnova de Lion"/>
            <div>{getItem.description}</div>
            </div>
            <ItemCount min={1} stock={getItem} handleModal={handleModal}/>
            <div>
                {modal ? 
                 <ModalCart 
                    getItem={getItem} setModal={setModal} modal={modal}
                    cart={cart} setCart={setCart} 
                     />
                : null}
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;
