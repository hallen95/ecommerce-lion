import React, {useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';

import { useParams } from 'react-router-dom';


const productos2 = [{   
                        id: 1,
                        nombre: 'Original Finish',
                        marca: 'Ternnova',
                        descripcion: 'SU FÓRMULA INNOVADORA SIN SOLVENTES ESTÁ ESPECÍFICAMENTE DISEÑADA PARA OTORGAR PROLONGADA HUMECTACIÓN, DEVOLVER FLEXIBILIDAD Y EL ASPECTO ORIGINAL DE UN CUERO, UN PLÁSTICO O UNA GOMA. DEBIDO A QUE NO OTORGA UN BRILLO EXCESIVO, ES IDEAL PARA EL TORPEDO DEL AUTO PORQUE NO SE GENERA EL REFLEJO EN EL PARABRISAS SU FORMULACIÓN BALANCEADA NO SE TRANSFIERE NI PERMITE QUE SE ADHIERA EL POLVO. TIENE UN AROMA MUY AGRADABLE Y SUAVE. SI SE APLICA EN LOS BURLETES, PROLONGA SU DURABILIDAD Y QUITA RUIDOS GENERADOS POR LOS MISMOS. IDEAL PARA EL USO EN LOS INTERIORES DEL VEHÍCULO. AL NO CONTENER SOLVENTES, NO ENGRASA LOS VIDRIOS.',
                        imagen: 'https://d22fxaf9t8d39k.cloudfront.net/ac8de3383fbcc01fcbe879d0753aa485599f9eff762d2e5904bffea62e03efd36957.png',
                        precio: 1250,
                        categoria: 'shampoo',
                        stock: 10
                    },

                    {
                        id: 2,
                        nombre: 'Gel acondicionador ExtraGloss',
                        marca: 'Ternnova',
                        descripcion: 'ESTE GEL ESTÁ ESPECIALMENTE FORMULADO PARA LA RECUPERACIÓN DE PLÁSTICOS QUEMADOS POR EL SOL Y MANTENIMIENTO DE AQUELLOS QUE SEAN NUEVOS. DA UN EFECTO INCREÍBLE SOBRE LOS PLÁSTICOS EXTERIORES DE SU VEHÍCULO. OTORGA PROLONGADA HUMECTACIÓN EVITANDO EL CUARTEADO PREMATURO. TIENE MUY BUENA RESISTENCIA AL AGUA Y NO SE PEGA LA TIERRA. NO CONTIENE SOLVENTES, ESO ES ALGO QUE LO DIFERENCIA DEL RESTO DE LOS PRODUCTOS!',
                        imagen:'https://i.postimg.cc/g2xV5qk9/GEL-ACONDICIONADOR-TERNNOVA-lion.png',     
                        precio: 1250,
                        categoria: 'shampoo',
                        stock: 10
                    },
                
                    {   id: 3,
                        nombre: 'Iron Hunter',
                        marca: 'Ternnova',
                        descripcion: 'UN PODEROSO DESCONTAMINANTE FÉRRICO AVANZADO DE pH BALANCEADO, CAPAZ DE REMOVER LOS RESIDUOS FÉRRICOS MÁS DUROS. DESARROLLADO PARA DISOLVER EL POLVO DE LOS FRENOS Y OTROS CONTAMINANTES DERIVADOS DEL HIERRO.',
                        imagen: 'https://i.postimg.cc/Z5X8hBCW/IRON-HUNTER-lion.png',
                        precio: 1200,
                        categoria: 'desengrasante',
                        stock: 10

                    },
                
                    {   id: 4,
                        nombre: 'Petroleum',
                        marca: 'Ternnova',
                        descripcion: 'ES UN INCREÍBLE ACONDICIONADOR DE NEUMÁTICOS, EL CUAL OTORGA BRILLO EXTREMO Y DURADERO. EVITA EL AGRIETAMIENTO DEL NEUMÁTICO DEJÁNDOLO COLOR NEGRO SIN QUE ESTE SE RESEQUE. LOGRÁ EL TAN DESEADO BRILLO EFECTO MOJADO "WET LOOK".',
                        imagen: 'https://i.postimg.cc/QM5pN8T0/TERNNOVA-PETROLUEM-lion.png',
                        precio: 1400,
                        categoria: 'desengrasante',
                        stock: 10
                    }
                ]
                
function ItemDetailContainer() {

    const [item, setItem] = useState([]); 
    const { id } = useParams();

    useEffect(() => {
        const call = new Promise((response, reject) => {
            setTimeout(() => {
                response(productos2);
            }, 1000);
        });
        call.then((productos2) => {
            setItem(productos2[id -1]);
        });
    }, []);
    
    return (
                    <div>
                        <ItemDetail getItem={item} />
                    </div>
    );
}
export default ItemDetailContainer;