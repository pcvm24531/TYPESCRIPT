"use strict";
let dev1 = {
    nombre: 'Pablo',
    tecnologias: ['PHP', 'JS'],
    tomaCafe: true,
};
let dev2 = {
    nombre: 'Raul',
    tecnologias: ['Typescript', 'React'],
    tomaCafe: false,
};
function enviarCV(programador) {
    console.log(`El CV de ${programador.nombre}`);
}
enviarCV(dev1);
enviarCV(dev2);
