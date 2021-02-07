import React, { useState } from 'react' // rfc 
import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import useCartContext from '../../CartContext'
import ModalCart from '../modalCart/ModalCart'


const ItemDetail = ({getItem}) => {
    let min = 0;
    const { cart, setCart } = useCartContext();
    
    const { addItems, setAddItems } = useCartContext();
    
    const [contador, setContador] = useState(0);

    const [modal, setModal] = useState(false);

    const suma = () => {
        let stock = getItem.stock
        contador <= stock ? 
        setContador(contador + 1)
        : alert('alerta superaste el stock') 
    }

    const resta = () => {
        contador > min ?
        setContador(contador - 1)
        : alert('el valor no puede ser menor a 0')
    }

    // useEffect(() => {
    //     console.log("Modal:", modal)
    //   }, [modal])

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
            <ItemCount  setModal={setModal} contador={contador}
                        suma={suma} resta={resta} setAddItems={setAddItems}/>
            <div>
                {modal ? 
                 <ModalCart 
                    getItem={getItem} setModal={setModal} modal={modal}
                    addItems={addItems} setAddItems={setAddItems} 
                    cart={cart} setCart={setCart} 
                    contador={contador} />
                : null}
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;
