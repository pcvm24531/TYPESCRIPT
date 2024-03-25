interface Developer{
    nombre:string,
    tecnologias:string[],
    tomaCafe:boolean | null,
}

let dev1 :Developer = {
    nombre:'Pablo',
    tecnologias: ['PHP','JS'],
    tomaCafe: true,
}
let dev2: Developer = {
    nombre: 'Raul',
    tecnologias: ['Typescript','React'],
    tomaCafe: false,
}

function enviarCV(programador:Developer) {
    console.log(`El CV de ${programador.nombre}`);    
}

enviarCV(dev1);
enviarCV(dev2);