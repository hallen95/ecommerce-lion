import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <React.Fragment>
            <h2>El item buscado no existe</h2>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Link to={'/'}><Button >Volver al inicio</Button></Link>
            </div>
        </React.Fragment>
    )
}

export default NotFound;