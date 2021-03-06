import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Item = ({itemmapeado}) => {

    return (
        <Card style={{ width: '18rem'}}>
        <Link to={`/item/${itemmapeado.id}`}><Card.Img variant="top" src={itemmapeado.tumbnail}/></Link>
        <Card.Body>
            <Card.Title>{itemmapeado.title}</Card.Title>
            <Card.Text>
                Uno de nuestros productos de mas alta calidad, con el mejor precio.
            </Card.Text>
            <Link to={`/item/${itemmapeado.id}`}>
                <Button variant="primary">
                    Detalles
                </Button>
            </Link>
        </Card.Body>
        </Card>
    )
}
export default Item;