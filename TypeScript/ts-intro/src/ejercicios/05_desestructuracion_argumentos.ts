export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc:'Nokia',
    precio:150
}

const tableta: Producto = {
    desc: 'iPad',
    precio: 350
}

export function calculaISV(productos: Producto[]): [number, number] {

    let total = 0;
    let total2 = 0;
    productos.forEach(producto => {
        total += producto.precio;
    })
    //Desestructuracion de argumento
    productos.forEach(({precio}) => {
        total2 += precio;
    })
    return [total * 0.15, total2 * 0.15];
}

const articulos = [telefono, tableta];
const isv = calculaISV(articulos);
const [total1, total2] = calculaISV(articulos);

console.log('Total1: ', total1);
console.log('Total2: ', total2);
console.log('ISV: ', isv);