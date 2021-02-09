import React from 'react'; 
import './itemCount.css';
import { FiShoppingCart } from 'react-icons/fi';

const ItemCount = ({setModal, suma, resta, contador, setAddItems}) => {

    const onAdd = () => {
        setModal(true)
        setAddItems(contador)
    }

    return (
        <React.Fragment>
            <div className="botones-wrapper">
                <button className="botones-counter" onClick={resta}>-</button>
                <p>{contador} </p>
                <button className="botones-counter" onClick={suma}>+</button>
                {
                contador > 0 &&
                <button disabled={contador === 0}
                        onClick={onAdd}>
                        agregar {contador && `${contador}`}{FiShoppingCart}
                </button> 
                }
                {/* <Link to='/cart'>
                    <button >añadir producto</button>
                </Link>  */}
            </div>
        </React.Fragment>
    )
};
export default ItemCount;