function funcionDecoradora<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@funcionDecoradora
class MiClaseADecorar {
    
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiClaseADecorar);

const miClaseADecor = new MiClaseADecorar();
console.log(miClaseADecor.miPropiedad);
console.log(miClaseADecor.reportingURL);//Saca error de compilacion pero al run, el valor de la propiedad se ve.