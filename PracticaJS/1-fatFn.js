// --------------------------------------------------------------------------- //
//        !funciones que se DECLARAN con la palabra reservada 'function'       //
// --------------------------------------------------------------------------- //

//Pueden tener dos objetivos:

//1 - Ser una funcion
//2 - Tener un contexto de this y ser utilizadas para impletentar herencia basada en prototypos

//Las funciones en js pueden actuar como funciones y tambien como clases basadas en prototypos. */

// Todo lo que se encuntra dentro de las {} forma parte de un prototypo 
function Fn() {
    this.prop = 'propiedad'

    return 'Soy una funcion'
}

let r = new Fn() // Al instanciar una funcion con la palabra 'new'. La misma, ignora el return y nos devuelve un objeto
console.log(r) // Devuelve: Fn { prop: 'propiedad' } en lugar de 'Soy una funcion'

console.log(r.__proto__) //Esto nos devolvera un objeto vacio

//* Extendemos el prototypo:
Fn.prototype.prototypoUno = function FuncionDePrototypoUno(){}

console.log(r.__proto__) // Devuelve: { prototypoUno: [Function: FuncionDePrototypoUno] }

// --------------------------------------------------------------------------- //
//                             !fat arrow function                             //
// --------------------------------------------------------------------------- //

const fatFn = () => {
    return 'Soy un arrow function'
}

let r1 = fatFn()
console.log(r1) // Devuelve: Soy un arrow function

// !Las fat arrow function no pueden ser llamadas con la palabra new. NO TIENEN CONTEXTO DE THIS
r1 = new fatFn()
console.log(r1) // Devuelve: Uncaught TypeError: fatFn is not a constructor

/* ---------------------------- return implicito ---------------------------- */

const fnR = () => 2 // Esto retornara 2 como si estuvieramos usando el return. Pero si usamos las llaves no lo hara, es decir, const fnR = () => { 2 }. UNICAMENTE cuando definimos la funcion sin llaves.
