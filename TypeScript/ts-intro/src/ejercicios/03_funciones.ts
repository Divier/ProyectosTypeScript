function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFuncionFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

console.log(multiplicar(5));

interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar(personaje: Personaje2, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: Personaje2 = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();

interface Direccion {
    calle:string;
    pais:string;
    ciudad:string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion: {
        calle:'Main St',
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ", " + this.direccion.ciudad + ", " +this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);