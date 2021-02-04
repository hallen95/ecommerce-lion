import React, { useState } from 'react'; 
import './itemCount.css';
import { Link } from 'react-router-dom'

const ItemCount = ({stock, onAdd}) => {
    let min = 0;
    const [contador, setContador] = useState(0);

    const suma = () => {
        contador >= stock ? 
        alert('alerta superaste el stock') 
        : setContador(contador + 1)
    }

    const resta = () => {
        contador > min ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }
    
    return (
        <React.Fragment>
            <div className="botones-wrapper">
                <button className="botones-counter" onClick={suma}>+</button>
                <p>{contador} </p>
                <button className="botones-counter" onClick={resta}>-</button>
                <button disabled={contador < 1}
                        onClick={() => onAdd(contador)}>
                        agregar {contador} {contador <= 1 ? 'articulo' : 'articulos'}
                </button>
                {/* <Link to='/cart'>
                    <button >añadir producto</button>
                </Link>  */}
            </div>
        </React.Fragment>
    )
};
export default ItemCount;