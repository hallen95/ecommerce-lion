import React from 'react';
import Item from '../item/Item';
// este componente recibe el array, lo mapea y lo retorna como un componente Item con una 
//propiedad 'itemmapeado' con todas sus propiedades.
const ItemList = ({products}) => {

    return (
    <React.Fragment>
        {products && products.map(i => <Item key={i.id} itemmapeado={i}/>)}
    </React.Fragment>
    )
}

export default ItemList;