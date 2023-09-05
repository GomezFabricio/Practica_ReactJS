const fn = (a, b, c) => console.log(a + b + c)
const array = [1,2,3]

//El spread operator nos permite tomar valores contenidos por un arreglo u objeto y distribuirlos dentro de una funcion o metodo

fn(...array)  // en caso de que el array tenga mas elementos de los que requiere dicha funcion o metodo, los elementos sobrantes simplemente seran ignorados.

//Tambien podemos combinar arrays
const array1 = [...array, 4, 5, 6]
console.log(array1)

//!Nota: Al hacer esto, realmente estamos haciendo una copia del array, es decir, que si modificamos nuestro arreglo despues de haberlo combinado, la combinacion anterior no se vera afectada.

array[0] = 'Hola'
console.log(array, array1) // array ha sido modificado, sin embargo, array1, que ya ha sido combinado antes de la modificacion de array, no muestra ningun cambio. 

//Funciona de la misma manera con objetos

obj = { a: 1, b: 2 }
obj1 = {...obj, texto : 'Soy un objeto nuevo'}  //Copia el objeto y lo asigna al nuevo objeto

console.log(obj1)
