import imagenes from '../photos/Imagenes'

const catalog = [
    {
        id: 1,
        nombre: 'Original Finish',
        marca: 'Ternnova',
        descripcion: 'SU FÓRMULA INNOVADORA SIN SOLVENTES ESTÁ ESPECÍFICAMENTE DISEÑADA PARA OTORGAR PROLONGADA HUMECTACIÓN, DEVOLVER FLEXIBILIDAD Y EL ASPECTO ORIGINAL DE UN CUERO, UN PLÁSTICO O UNA GOMA. DEBIDO A QUE NO OTORGA UN BRILLO EXCESIVO, ES IDEAL PARA EL TORPEDO DEL AUTO PORQUE NO SE GENERA EL REFLEJO EN EL PARABRISAS. SU FORMULACIÓN BALANCEADA NO SE TRANSFIERE NI PERMITE QUE SE ADHIERA EL POLVO. TIENE UN AROMA MUY AGRADABLE Y SUAVE. SI SE APLICA EN LOS BURLETES, PROLONGA SU DURABILIDAD Y QUITA RUIDOS GENERADOS POR LOS MISMOS. IDEAL PARA EL USO EN LOS INTERIORES DEL VEHÍCULO. AL NO CONTENER SOLVENTES, NO ENGRASA LOS VIDRIOS.',
        imagen: imagenes.img1,
        imagen_detail: imagenes.img_detail1, 
        precio: 1250,
        stock: 10,
        categoria: [{catId: "01", nombre: "shampoo"}]
    },

    {
        id: 2,
        nombre: 'Gel ExtraGloss',
        marca: 'Ternnova',
        descripcion: 'ESTE GEL ESTÁ ESPECIALMENTE FORMULADO PARA LA RECUPERACIÓN DE PLÁSTICOS QUEMADOS POR EL SOL Y MANTENIMIENTO DE AQUELLOS QUE SEAN NUEVOS. DA UN EFECTO INCREÍBLE SOBRE LOS PLÁSTICOS EXTERIORES DE SU VEHÍCULO. OTORGA PROLONGADA HUMECTACIÓN EVITANDO EL CUARTEADO PREMATURO. TIENE MUY BUENA RESISTENCIA AL AGUA Y NO SE PEGA LA TIERRA. NO CONTIENE SOLVENTES, ESO ES ALGO QUE LO DIFERENCIA DEL RESTO DE LOS PRODUCTOS!',
        imagen: imagenes.img3,
        imagen_detail: imagenes.img_detail2,
        precio: 1250,
        stock: 12,
        categoria: [{catId: "01", nombre: "shampoo"}]
    },

    {   id: 3,
        nombre: 'Iron Hunter',
        marca: 'Ternnova',
        descripcion: 'UN PODEROSO DESCONTAMINANTE FÉRRICO AVANZADO DE pH BALANCEADO, CAPAZ DE REMOVER LOS RESIDUOS FÉRRICOS MÁS DUROS. DESARROLLADO PARA DISOLVER EL POLVO DE LOS FRENOS Y OTROS CONTAMINANTES DERIVADOS DEL HIERRO.',
        imagen: imagenes.img2,
        imagen_detail: imagenes.img_detail3,
        precio: 1200,
        stock: 10,
        categoria: [{catId: "02", nombre: "desengrasante"}]
    },

    {   id: 4,
        nombre: 'Petroleum',
        marca: 'Ternnova',
        descripcion: 'ES UN INCREÍBLE ACONDICIONADOR DE NEUMÁTICOS, EL CUAL OTORGA BRILLO EXTREMO Y DURADERO. EVITA EL AGRIETAMIENTO DEL NEUMÁTICO DEJÁNDOLO COLOR NEGRO SIN QUE ESTE SE RESEQUE. LOGRÁ EL TAN DESEADO BRILLO EFECTO MOJADO "WET LOOK".',
        imagen: imagenes.img4,
        imagen_detail: imagenes.img_detail4,
        precio: 1400,
        stock: 10,
        categoria: [{catId: "02", nombre: "desengrasante"}]
    }
]

const categories = [
    {catId: "01", nombre: "shampoo"},
    {catId: "02",  nombre: "desengrasante"}
];

export const getCatalog = () => {
    return new Promise ((success, reject) => { //al ejecutar la promise en un useEffect, solo lo hace en el primer montaje
        setTimeout(() => {
            success(catalog) //simula un ajax
        }, 2000);
    })
}

export const getProductById = () => {
    return new Promise((success) => {
        setTimeout(() => {
          success(catalog)
        }, 2000);
      });
}

export const getCategories = () => {
    return new Promise ((success) => {
      success(categories)
    })
  }