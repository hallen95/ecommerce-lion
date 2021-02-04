import React, { useState } from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({getItem}) => {
    const [quantity, setQuantity] = useState(0)

    return (
        <React.Fragment>
            <div className="itemDetailStyle"><h2>
                {getItem.nombre}
            </h2>
            <img  src={getItem.imagen} alt="foto del producto Terrnova de Lion"/>
            <div>{getItem.descripcion}</div>
            </div>
            <ItemCount init={1} stock={5} onAdd={setQuantity}/>
            { <button> {`confirmar compra por ${quantity}`} </button> }      
        </React.Fragment>
    )
}

export default ItemDetail;
