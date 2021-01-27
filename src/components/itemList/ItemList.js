import React from 'react';
import Item from '../item/Item';
import './itemList.css';
import { Container, Row, Col } from 'react-bootstrap'
// este componente recibe el array, lo mapea y lo retorna como un componente Item con una 
//propiedad 'itemmapeado' con todas sus propiedades.
const ItemList = ({products}) => {
    
    return (
        <Container>
            <Row>
                <Col>
                    {products && products.map(i => <Item key={i.id} itemmapeado={i}/>)}
                </Col>
           </Row>        
        </Container>
    )
}
    
export default ItemList;