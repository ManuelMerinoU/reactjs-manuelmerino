import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function notifyBorrarProducto(){
     toast.error('Borraste un producto!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyBorrasTodo(){
    toast.error('Borraste Todo el Carrito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyCompra(){
    toast.success('🚀 Gracais por tu compra!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyHayoNo(){

    toast.success('Este producto se encuentra en su carrito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export function notifyQuantity(){

    toast.success('La cantidad de este producto es de', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}