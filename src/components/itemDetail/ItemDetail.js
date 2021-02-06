import React, { useEffect, useState } from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import useCartContext from '../../CartContext'
import ModalCart from '../modalCart/ModalCart'


const ItemDetail = ({getItem, id}) => {
    let min = 0;
    const { cart, setCart } = useCartContext();
    
    const { stock, setStock } = useCartContext();
    
    const { addItems, setAddItems } = useCartContext();
    
    const [contador, setContador] = useState(0);

    const [modal, setModal] = useState(false);

    const suma = () => {
        contador >= stock ? 
        alert('alerta superaste el stock') 
        : setContador(contador + 1)
    }

    const resta = () => {
        contador > min ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }

    useEffect(()=> { 
        setStock(getItem.stock)
    }, [setStock, getItem.stock])

    useEffect(() => {
        console.log("Modal:", modal)
      }, [modal])

    // const { id } = useParams();

    // const onAdd = (contador) => {
    //     setModal(true);
    //     setAddItems(contador) 
    // }

    return (
        <React.Fragment>
            <div className="itemDetailStyle"><h2>
                {getItem.nombre}
            </h2>
            <img  src={getItem.imagen_detail} alt="foto del producto Terrnova de Lion"/>
            <div>{getItem.descripcion}</div>
            </div>
            <ItemCount init={1} stock={stock} setModal={setModal}
                        suma={suma} resta={resta} setAddItems={setAddItems} 
                        contador={contador} setContador={setContador}/>
            <div>
                {modal ? 
                 <ModalCart 
                    getItem={getItem} setModal={setModal} modal={modal}
                    addItems={addItems} setAddItems={setAddItems} stock={stock}
                    setStock={setStock} cart={cart} setCart={setCart} 
                    id={id} contador={contador} />
                : null}
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;
