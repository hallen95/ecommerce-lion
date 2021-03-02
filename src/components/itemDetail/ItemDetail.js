import React, { useEffect, useState } from 'react'; 
import './itemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import useCartContext from '../../context/CartContext';
import ModalCart from '../modalCart/ModalCart';
    

const ItemDetail = ({getItem}) => {

    const { cart, setCart, stock, setStock } = useCartContext();
    const [addItems, setAddItems] = useState(0)
    const [modal, setModal] = useState(false);

    const handleModal = (contador) => {
        setModal(true)
        setAddItems(contador)
    }

    useEffect(()=> { 
        setStock(getItem.stock)
    }, [setStock, getItem.stock])

    return (
        <React.Fragment>
        <div className='item_detail_container'>
            <div className="title__detail">
                <h2>{getItem.title}</h2>
            </div>
            <div className="content_detail">
                <img  src={getItem.photodescription} alt="foto del producto Terrnova de Lion"/>
                <p>{getItem.description}</p>
            </div>
        </div>
            <ItemCount initial={1} stock={stock} handleModal={handleModal}/>
            <div>
                {modal ? 
                 <ModalCart
                    getItem={getItem} setModal={setModal} modal={modal} stock={stock} setStock={setStock}
                    cart={cart} setCart={setCart} addItems={addItems} setAddItems={setAddItems}
                     />
                : null}
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;
