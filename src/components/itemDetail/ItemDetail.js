import React from 'react' // rfc 
import './itemDetail.css'

const ItemDetail = ({getItem}) => {
    return (
        <div>
            <h2 className="itemDetailStyle">
                {getItem.nombre}
            </h2>
            <img className="fotoDetail" src={getItem.imagen} alt="foto del producto original finish"/>
            <div className="DescripcionDetail">{getItem.descripcion}</div>
        </div>
    )   
}

export default ItemDetail;
