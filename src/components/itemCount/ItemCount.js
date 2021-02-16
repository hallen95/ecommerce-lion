import React, { useState } from 'react'; 
import './itemCount.css';
import { FiShoppingCart } from 'react-icons/fi';

const ItemCount = ({stock, handleModal, min}) => {

    const [contador, setContador] = useState(0); 

    const suma = () => {
        let controlStock = stock.stock
        contador <= controlStock ? 
        setContador(contador + 1)
        : alert('alerta superaste el stock') 
    }

    const resta = () => {
        contador > min ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }

    const onAdd = () => {
        handleModal(contador)
    }

    return (
            <div className="botones-wrapper">
                <button className="botones-counter" onClick={resta}>-</button>
                <p>{contador} </p>
                <button className="botones-counter" onClick={suma}>+</button>
                {
                contador > 0 &&
                <button disabled={contador === 0}
                        onClick={() => onAdd()}>
                        agregar {contador && `${contador}`}<FiShoppingCart/>
                </button> 
                }
                {/* <Link to='/cart'>
                    <button >añadir producto</button>
                </Link>  */}
            </div>
    )
};
export default ItemCount;