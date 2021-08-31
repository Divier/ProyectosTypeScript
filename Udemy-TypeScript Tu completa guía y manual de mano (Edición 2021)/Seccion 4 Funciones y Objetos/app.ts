(() => {

  //Funciones Basicas
  function sumar(a: number, b:number): number {
    return a + b;
  }
  
  //Referencia a funcion
  const contar = (heroes: string[]): number => {
    return heroes.length;
  }

  const superHeroes:string[] = ["Flash","Arrow","Superman","Linterna Verde"];
  contar(superHeroes);

  //Funciones con parametros por default
  const llamarBatman = ( llamar: boolean = true ):void => {
    if(llamar) {
      console.log('Batiseñal activada');
    }    
  }
  llamarBatman();

  //Funciones con parametros rest
  const unirHeores = (...personas:string[]): string => {
    return personas.join(", ");
  }

  //Tipo Function
  const noHaceNada=(numero:number, texto: string, booleano:boolean, arrehlo:string[]) => {}

  let noHaceNadaTampoco: (n: number, t:string, b:boolean, a:string[]) => void;
  noHaceNadaTampoco = noHaceNada;

})()
  
  