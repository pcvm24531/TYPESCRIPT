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
        let oct: number = 0o12;
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
* ANY: Tipo de dato que que se debe evitar usar
    ```javascript
    let edad: any;
    edad = 12;
    console.log(edad);
    edad = "Doce años";
    console.log( edad );
    edad = true;
    console.log(edad);
### Compuestos Estructurados
* Object: Los objetos no son tipados como los datos primitivos, para los objetos es necesario usar interfaces.
    ```javascript
* Array: Los arrays se usan como variables primitivas
    ```javascript
    //arreglo de numeros
    const numeros: numbe[] = [1,2,3,4,5];
    //arreglo de textos
    const nombres: string[] = ["Juan","Eva","Ana"];
    //arreglo de boolean
    const valorBool: boolean[] = [true, false,false];
* Enum: 
    ```javascript
    //Definicion de enum para dias de la semana
    enum DiasSemana{
        Lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado
        ,Domingo
    }

    //enum con valores de cadena(String  enums)
    enum Colores{
        Rojo="rojo",
        Verde="verde",
        Azul="azul",
    }
* Function: En las funciones se puede pasar los parametros con sus tipos de datos
    ```javascript
    //Declaracion de funcion con tipado EXPLICITO
    function sumar(a:number, b:number): number{
        return a+b;
    }

    //Funcion flrcha con retorno IMPLICITO
    const dividir = (a:number, b:number)=>a/b;

    //Funciones con parametros opcionales
    function saludar(nombre:string, edad?: number): string{
        if(edad !== undefined){
            return `Hi, my name is ${nombre} and my age is: ${edad}`;
        }else{
            return `Hi, my name is ${nombre}`;
        }
    }

### Definidos por Usuario
* Class:
* Interface:
* Type:

