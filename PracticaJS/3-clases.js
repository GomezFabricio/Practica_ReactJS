//Podemos crear una clase y asignarla a una constante. Esto se denomina Expresion de Clase
const Rectangulo = class R {

}
const r = new Rectangulo()

//Tambien podemos crearla directamente con la palabra class sin asignarle a una constante. Esto se denomina. Esto se denomina Declaracion de clase
class Triangulo{

}
const t = new Triangulo()

//Otra manera de hacerlo es con la palabra reservada function. Cuando declaramos una clase con la palabra reservada function podemos invocarla incluso antes de su declaracion. Esto se llama Hoisting y es lo mismo que sucede con las variables 'var'.
function Cuadrado() {

}
const c = new Cuadrado()

//!Nota: Cuando instanciamos una clase declarada con la palabra class, utilizando la palabra reservada 'new', lo que estamos hacien es ejecutar el constructor de la clase. En caso de no utilizar la palabra 'new' nos arrojara el siguiente error: El constructor de la clase [Nombre de la clase] no puede ser invocado sin la palabra 'new'. 

//Ejemplo de clase con atributos y metodos
class saludo{
    #estado //Declaracion de una propiedad privada
    static propiedadDeEjemplo = 'propiedad estatica'
    constructor(nombre, apellido, estado = true){
        this.nombre = nombre
        this.apellido =  apellido
        this.#estado = estado
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.apellido} ${this.nombre} y estoy ${this.#estado ? 'contento' : 'triste'}`) //Pregunta si es true o false, en caso de true muestra un mensaje y en caso contrario otro
        
    }

    static metodoEstatico(){ //Un metodo estatico es aquel que no depende de un objeto en particular de la clase. 
        console.log(`Soy un metodo estatico y estoy accediendo a una ${this.propiedadDeEjemplo}`) //Al ser un metodo estatico no puede acceder a las propiedades publicas ni privadas de la clase, solo a las propiedades declaradas como static

    }
}

let saludoUno = new saludo('Fabricio', 'Gomez')
saludoUno.saludar()
saludo.metodoEstatico()

//Una propiedad privada de una clase solo podra ser accedida mediante los metodos de la clase