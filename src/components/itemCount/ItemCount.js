import React, { useState, useEffect } from 'react'; 
import { Button } from 'react-bootstrap';
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
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:"40px"}}className="botones-wrapper">
                <Button variant="danger" style={{marginRight: "20px"}}className="botones-counter" onClick={resta}>-</Button>
                <span  style={{fontSize:"20px"}}>{contador} </span>
                <Button variant="danger" style={{marginLeft: "20px"}} className="botones-counter" onClick={suma}>+</Button>
                {contador > 0 &&
                <Button variant="warning" disabled={contador === 0}
                        onClick={onAdd}
                        style={{marginLeft: "20px", fontWeight:"bold", fontSize:"18px"}}>
                        <span>agregar {contador && `${contador}`}</span>
                        <FiShoppingCart/>
                </Button>}
            </div>
    )
};
export default ItemCount;