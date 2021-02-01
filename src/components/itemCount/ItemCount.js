import React from 'react'; 
import './itemCount.css';
import { Link } from 'react-router-dom'

const ItemCount = ({suma, resta, onAdd, contador, contadorCarrito}) => {

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
                <Link to='/cart'>
                    {contadorCarrito && 
                    <button>
                        {`confirmar compra por ${contadorCarrito}`}
                    </button>}
                </Link>
                </div>
        </React.Fragment>
    )
};
export default ItemCount;