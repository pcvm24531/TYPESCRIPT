# TYPESCRIPT
Learn everithing about typescript

## NOTES

Typescript allows with your code to be more solid and clean.
Typescript es como un super set de JavaScript
Typescript al compilar termina siendo un javascript

## MODO OBSERVADOR UN ARCHIVO
Ejecutar el siguiente comando para habilitar el modo observador, para ello usamos el '-w'=>watch
`$ tsc script.ts -w`

## MODO OBSERVADOR UN PROYECTO
Primero se debe inicializar un proyecto con typescript para eso se debe 
ejecutar
`$ tsc -init` => crea el archivo tsconfig.json e inicializa el proyecto typescript

Para observar todo un proyecto typescript ejecutamos 
`$ tsc -w` => Para que este comando reconosca los cambios del proyecto primero se debe inicializar un proyecto typescript, para ello ejecutamos el comando tsc -init

## TIPOS DE DATOS
### Primitivos
Los datos primitivos son tipados del siguiente modo **let var : string = 'Hola Mundo'**
* String: 
    * Comillas Dobles => "Texto"
        ```javascript
        let cadena: string = "Hola Mundo";
    * Comilla Simple => 'Texto'
        ```javascript
        let cadena: string = 'Hola Mundo';
    * Comilla inversa => `${var}`
        ```javascript
        let cadena: string = `Hola ${mundo}`;
* Number: 
    * Enteros
        ```javascript
        let num: number = 10;
    * Decimal
        ```javascript
        let dec: number = 10.5;
    * Exponencial
        ```javascript
        let exp: number = 2.5e3;
    * Exponencial negativa
        ```javascript
        let expNeg: number = 2.5e-2;
    * Hexadecimal
        ```javascript
        let hexa: number = 0xA;
    * Octales
        ```javascript
        let oct: number => =o12;
    * Binarios
        ```javascript
        let bin: number = 0b1010;
* Boolean:
    ```javascript
    let bool1:boolean = true / false
* Undefined: No se ha asignado un valor
    ```javascript
    let varUndefined: undefined;
    varUndefined = undefined;
* Null: Son variables que se pueden inicializar como los undefined
    ```javascript
    let varNull: null;
    varNull = null;
### Compuestos Estructurados
* Object: 
* Array:
* Enum:
* Function:
### Definidos por Usuario
* Class:
* Interface:
* Type: