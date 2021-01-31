import React from 'react'; 
import './itemCount.css';

const ItemCount = ({suma, resta, onAdd, contador, contadorCarrito, confirm}) => {

    return (
        <React.Fragment>
            <div className="botones-wrapper">
                <button className="botones-counter" onClick={suma}>+</button>
                <p>{contador} </p>
                <button className="botones-counter" onClick={resta}>-</button>
                <button disabled={contador < 1}
                        onClick={onAdd}>
                    agregar {contador} {contador <= 1 ? 'articulo' : 'articulos'}
                </button>
                {contadorCarrito && 
            <button onClick={confirm}>{`confirmar compra por ${contadorCarrito}`}</button>}
            </div>
        </React.Fragment>
    )
};
export default ItemCount;