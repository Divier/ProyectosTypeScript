class Padre {
    constructor(
        protected nombre: string,
        protected edad: number,
        protected detalle?: string
    ) {}

    mostrarInfo(): void {
        console.log('Informacion de Padre', this.nombre, this.edad);
    }
}

class Hijo extends Padre {
    constructor(
        public detalle: string
    ) {
        super('HIJO', 10, detalle);
    }

    mostrarInfo(): void {
        console.log('Informacion de Hijo', this.nombre, this.edad, this.detalle);
    }

    mostrarCualquierInfo<T>(valor: T): T {
        return valor;
    }
}

//let obj = new Padre('PAPA', 50);
let obj = new Hijo('El detalle es opcional');
obj.mostrarInfo();
console.log(obj.mostrarCualquierInfo('String'));
console.log(obj.mostrarCualquierInfo(100));
console.log(obj.mostrarCualquierInfo(true));
console.log(obj.mostrarCualquierInfo([1,2]));
console.log(obj.mostrarCualquierInfo({}));