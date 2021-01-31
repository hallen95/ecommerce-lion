import React, { useState } from 'react'; 
import './itemCount.css';
// aca recibe las propiedades pasadas por ItemListContainer y se crea la logica
const ItemCount = ({initial, stock}) => {
    let minimoposible = 0;
    // se iguala a una variable a 0 para evitar restar con numeros negativos
    const [contador, setContador] = useState(initial);

    const suma = () => {
        contador >= stock ? 
        alert('alerta superaste el stock') 
        : setContador(contador + 1)
    }

    const resta = () => {
        contador > minimoposible ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }

    const onAdd = () => {
        alert(`agregaste ${contador} productos al carrito`);
    }

    return (
        // este es el manejador de los botones, se pasan las funciones por prop
            <>
                <div className="botones-wrapper">
                    <button className="botonesCart" onClick={suma}>+</button>
                    <p>{contador} </p>
                    <button className="botonesCart" onClick={resta}>-</button>
                    <button className="botonesCart"
                        disabled={contador < 1}
                        onClick={onAdd}>
                        agregar {contador} {contador <= 1 
                                ? 'articulo al carrito' : 'articulos'}
                    </button>
                </div>
            </>
    )
};

export default ItemCount;