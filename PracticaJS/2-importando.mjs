//Metodo Uno:
//const frutas = require('./2-importExport')

//Metodo Dos (El que usaremos con react):
import frutas, {verduras, fnEnsalada} from './2-importExport.mjs'
console.log(frutas, verduras)
console.log(fnEnsalada())

//!Nota: Para el segundo metodo necesitamos cambiar la extension del archivo a .mjs, Pero cuando trabajemos con React no sera necesario hacer esto.

