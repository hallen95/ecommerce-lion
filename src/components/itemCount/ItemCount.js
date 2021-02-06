import React, { useEffect } from 'react'; 
import './itemCount.css';
import CartWidget from '../cartWidget/CartWidget'

const ItemCount = ({init, stock, setModal, suma, resta, contador, setContador, setAddItems}) => {

    const onAdd = () => {
        setModal(true)
        setAddItems(contador)
    }

    useEffect(() => {
        stock === 0 && setContador(0)
        return () => {setContador(init)}
    }, [stock, init])

    return (
        <React.Fragment>
            <div className="botones-wrapper">
                <button className="botones-counter" onClick={suma}>+</button>
                <p>{contador} </p>
                <button className="botones-counter" onClick={resta}>-</button>
                {
                stock > 0 ?
                <button disabled={contador === 0}
                        onClick={onAdd}>
                        agregar {contador > 0 && `${contador}`} <CartWidget/>
                </button> 
                :
                <button disabled>Sin stock</button>
                }
                {/* <Link to='/cart'>
                    <button >añadir producto</button>
                </Link>  */}
            </div>
        </React.Fragment>
    )
};
export default ItemCount;