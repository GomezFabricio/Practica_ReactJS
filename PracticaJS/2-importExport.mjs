const frutas = ['manzana', 'pera', 'banana']
const verduras = ['Lechuga', 'Repollo']

//Metodo Uno
//module.exports = frutas

export default frutas //Exportacion default
export {verduras}

//Tambien se pueden exportar funciones

const fnEnsalada = () => 'Soy una Ensalada'
export {fnEnsalada}