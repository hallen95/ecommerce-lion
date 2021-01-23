import React, {useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState() 
    
    useEffect(()=> {
        const call = new Promise((response, reject) => {
            setTimeout(()=> {
                response(productos2);
            }, 2000)
        })
        call.then((productos) => {
            console.log(productos);
            setItem(productos[0]);
        })
    }, [])  
    
    const productos2 = [{
                            id: 1,
                            nombre: 'Original Finish',
                            marca: 'Ternnova',
                            precio: 1250
                        },
    
                        {
                            id: 2,
                            nombre: 'Gel acondicionador ExtraGloss',
                            marca: 'Ternnova',
                            precio: 1250
                        },
                    
                        {   id: 3,
                            nombre: 'Iron Hunter',
                            marca: 'Ternnova',
                            precio: 1200
                        },
                    
                        {   id: 4,
                            nombre: 'Petroleum',
                            marca: 'Ternnova',
                            precio: 1400
                        }
                    ]
    
    return(
        
        <ItemDetail getItem={item}/>

    )
}
export default ItemDetailContainer;