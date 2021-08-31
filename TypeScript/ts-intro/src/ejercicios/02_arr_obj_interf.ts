let habilidades: (string | number) [] = ["habilidad 1","habilidad 2","habilidad 3"];

interface Personaje {
    nombre: string;
    edad: number;
    aHabilidades: (string | number) [];
    otro?: string; //? significa que el campo es opcional
}

const personaje: Personaje = {

    nombre: "Saul",
    edad: 40,
    aHabilidades: habilidades
}

//personaje.otro = "OTRO";

console.table(personaje);