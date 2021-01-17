import React from 'react';
// e item en si, recibe el itemmapeado resultado de ItemList y lo pone en pantalla 2 s despues
const Item = ({itemmapeado}) => {
    return (
        <div>{itemmapeado.nombre} {itemmapeado.marca}</div>
    )
}

export default Item;