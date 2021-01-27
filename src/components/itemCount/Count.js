import React from 'react';
import './count.css';

// este recibe las props enviadas en ItemCount y crea la interaccion pero no la logica
const Count = ({min, sum, onAdd, count}) =>{

    return (
        <>
        <div className="contadorLleno">
            <div className="countStyle">
                <button onClick={sum}>+</button>
                <p className="texto-en-boton">{count} </p>
                <button onClick={min}>-</button>
            </div>
            <button disabled={count < 1}
                    className='countStyle'
                    onClick={onAdd}>
                agregar {count} {count <= 1 ? 'articulo' : 'articulos'}
            </button>
        </div>
        </>
    )
} 

export default Count;