import React, {useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail'


const productos2 = [{
                        id: 1,
                        nombre: 'Original Finish',
                        marca: 'Ternnova',
                        descripcion: 'SU FÓRMULA INNOVADORA SIN SOLVENTES ESTÁ ESPECÍFICAMENTE DISEÑADA PARA OTORGAR PROLONGADA HUMECTACIÓN, DEVOLVER FLEXIBILIDAD Y EL ASPECTO ORIGINAL DE UN CUERO, UN PLÁSTICO O UNA GOMA. DEBIDO A QUE NO OTORGA UN BRILLO EXCESIVO, ES IDEAL PARA EL TORPEDO DEL AUTO PORQUE NO SE GENERA EL REFLEJO EN EL PARABRISAS SU FORMULACIÓN BALANCEADA NO SE TRANSFIERE NI PERMITE QUE SE ADHIERA EL POLVO. TIENE UN AROMA MUY AGRADABLE Y SUAVE. SI SE APLICA EN LOS BURLETES, PROLONGA SU DURABILIDAD Y QUITA RUIDOS GENERADOS POR LOS MISMOS. IDEAL PARA EL USO EN LOS INTERIORES DEL VEHÍCULO. AL NO CONTENER SOLVENTES, NO ENGRASA LOS VIDRIOS.',
                        imagen: 'https://d22fxaf9t8d39k.cloudfront.net/ac8de3383fbcc01fcbe879d0753aa485599f9eff762d2e5904bffea62e03efd36957.png',
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
                
function ItemDetailContainer() {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const call = new Promise((response, reject) => {
            setTimeout(() => {
                response(productos2);
            }, 1000);
        });
        call.then((productos2) => {
            console.log(productos2);
            setItem(productos2[0]);
        });
    }, []);
    return (
        <ItemDetail getItem={item} />
    );
}
export default ItemDetailContainer;