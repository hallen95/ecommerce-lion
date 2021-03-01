import React, { useState, useEffect } from 'react'; 
import './itemCount.css';
import { FiShoppingCart } from 'react-icons/fi';


const ItemCount = ({stock, handleModal, initial}) => {

    const [contador, setContador] = useState(0); 

    const suma = () => {
        contador < stock ? setContador(contador + 1) : alert('alerta superaste el stock') 
    }

    const resta = () => {
        contador >= initial ? setContador(contador - 1) : alert('el valor no puede ser menor a 0')
    }

    useEffect(() => {
        stock === 0 && setContador(0)
        return () => {setContador(0)}
    }, [stock])

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
                        onClick={onAdd}>
                        agregar {contador && `${contador}`}<FiShoppingCart/>
                </button> 
                }
            </div>
    )
};
export default ItemCount;