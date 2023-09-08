const array = [1, 2, 3, 4, 5]

//* Metodo Filter
const r = array.filter(elemento => elemento > 2) // Devolvera los elementos mayores que 2
/* console.log(r) */

// Tambien podemos obtener el indice del elemento
const r1 = array.filter((e, i) => {
    console.log(`El valor de ${i} es: `, e);
    return e > 2
})

console.log(r1)

//* Metodo Map
const mapped = array.map((e) => e) // Devolvera un nuevo arreglo con cada elemento multiplicado por dos
console.log(mapped)

//* Metdodo Reduce
const redux = array.reduce((acc, e) => acc + e, 0)
console.log('redux: ', redux)