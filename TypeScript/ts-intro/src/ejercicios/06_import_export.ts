import { calculaISV, Producto } from './05_desestructuracion_argumentos';

const carritoCompras: Producto[] = [
    {
        desc:'Telefono 1',
        precio:100
    },
    {
        desc:'Telefono 2',
        precio:150
    }
]

const [total1, total2] = calculaISV(carritoCompras);
console.log('Total1: ', total1);
console.log('Total2: ', total2);