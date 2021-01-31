import React from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({getItem}) => {

    return (
        <section className="general-settings-itemDetail">
            <h2>{getItem.nombre}</h2>           
            <div className="itemDetailStyle">
                <img className="fotoDetail" src={getItem.imagen} alt="foto del producto Terrnova de Lion"/>
                <p>{getItem.descripcion}</p>
            </div>
            <ItemCount initial={1} stock={getItem.stock} />
        </section>
    )   
}

export default ItemDetail;
