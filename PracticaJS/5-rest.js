//Cuando aplicamos el operador rest en una función, estamos capturando los argumentos que se le pasan en la invocación de la misma y los reorganizamos en un arreglo

const rest = (...argumentos) => {
    console.log(argumentos)
}

rest(1, 2, 3)

//tambien podemos tomar solo un argumento y dejar el resto agrupado:

const rest1 = (a, ...argumentos) => {
    console.log('primer valor:', a); // primer valor: 50
    console.log("Rest:", argumentos); // Rest [ 'hola', true ]
}

rest1(50, 'hola', true)


//!Nota: el operador rest siempre debe ser el ultimo parametro que definamos en nuestra funcion, de caso contrario nos arrojara un error.

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

const { a , b } = obj // De esta manera obtener una o mas propiedades de un objeto de manera selectiva
console.log(a, b)


//*Ahora si quisieramos que el resto de propiedades se agrupen en un arreglo podemos hacer uso del operador rest

const obj1 = {
    nombre : 'Fabricio', apellido: 'Gomez', edad: 20, estatura: 1.75
}

const {nombre , apellido, ...arreglo} = obj1
console.log(nombre, apellido, arreglo)

//*Con los arreglos funciona exactamente igual

array = [10, 20, 30, 40, 50]
const [primero, segundo, ...restoNumeros] = array
console.log(primero, segundo, restoNumeros)


//TODO: Ejemplo de como podriamos utilizar esto en react.

const useState = () => ['valor', () => {}]
const [valor, setValor] = useState()
console.log(valor, setValor)

