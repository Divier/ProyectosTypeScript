interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Pasajero1',
}

const pasajero2: Pasajero = {
    nombre: 'Pasajero2',
    hijos: ['Natalia' ,'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {

    const numeroHijos = pasajero.hijos?.length || 0;//hijos? con ? siginifca q si hijos es undefined no se reviente
    console.log(numeroHijos);
}

imprimeHijos(pasajero1);