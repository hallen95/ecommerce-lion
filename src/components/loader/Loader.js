import React from 'react'
import { Spinner } from 'react-bootstrap'
    
function Loader() {
    return (
    <Spinner className="spinnering" animation="border" role="status">
    <span className="sr-only">Cargando...</span>
    </Spinner>
    )
}

export default Loader
