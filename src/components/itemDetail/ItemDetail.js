import React, { useState } from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({getItem}) => {
    let min = 0;
    const [contador, setContador] = useState(0);
    const [contadorCarrito, setContadorCarrito] = useState(false)

    const suma = () => {
        contador >= getItem.stock ? 
        alert('alerta superaste el stock') 
        : setContador(contador + 1)
    }

    const resta = () => {
        contador > min ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }

    const onAdd = () => {
        setContadorCarrito(contadorCarrito + contador);
        setContador(0);
        console.log(contadorCarrito);
        console.log(contador);
    }
    
    return (
        <React.Fragment>
            <h2 className="itemDetailStyle">
                {getItem.nombre}
            </h2>
            <img className="fotoDetail" src={getItem.imagen} alt="foto del producto Terrnova de Lion"/>
            <div className="DescripcionDetail">{getItem.descripcion}</div>
            <ItemCount suma={suma} resta={resta} onAdd={onAdd} contador={contador} contadorCarrito={contadorCarrito}/>
        </React.Fragment>

    )   
}

export default ItemDetail;
