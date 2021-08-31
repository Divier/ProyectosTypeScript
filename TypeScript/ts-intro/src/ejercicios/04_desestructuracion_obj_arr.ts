
interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalle: Detalle
}

interface Detalle {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo:10,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Objetos
const {volumen: vol, segundo, cancion, detalle} = reproductor;
const {autor} = detalle;

console.log('El volumen actual es', vol);
console.log('El segundo actual es', segundo);
console.log('La cancion actual es', cancion);
console.log('El autor es', autor);
console.log('El año es', detalle.anio);

//Arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 1', dbz[0]);
console.log('Personaje 2', dbz[1]);
console.log('Personaje 3', p3);