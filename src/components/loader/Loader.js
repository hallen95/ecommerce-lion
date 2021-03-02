import React from 'react';
import { Spinner } from 'react-bootstrap';
    
function Loader({loading}) {

    return (
        <div style={{display:'flex', flexDirection:"column",
        alignItems:'center', fontSize:"40px"}}>
            <Spinner className="spinnering" animation="border" role="status"/>
            <div style={{marginTop:"30px"}}>{loading}</div>
        </div>
    )
}

export default Loader
