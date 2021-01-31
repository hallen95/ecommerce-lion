import React from 'react'; 
import './itemCount.css';

const ItemCount = ({suma, resta, onAdd, contador, contadorCarrito}) => {

    return (
        <React.Fragment>
            <div>
                <button onClick={suma}>+</button>
                <p>{contador} </p>
                <button onClick={resta}>-</button>
            </div>
            <button disabled={contador < 1}
                    className='countStyle'
                    onClick={onAdd}>
                agregar {contador} {contador <= 1 ? 'articulo' : 'articulos'}
            </button>
            {contadorCarrito ? 
            <button disabled={false}>Confirmar compra</button> 
            : <button disabled={true}>Confirmar compra</button>}
        </React.Fragment>
    )
};
export default ItemCount;