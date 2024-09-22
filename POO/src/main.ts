//Importo todo los ejercicios 
import { Cabecera_pagina } from "./ejercicio 1";
import  {calculadora } from "./ejercicio 2";
import { Cancion } from "./ejercicio 3";
import { Cuenta } from "./ejercicio 4";
import { empleado } from "./ejercicio 5";

//Aqui muestro los datos del ejericicio 1 mostrados en consola 
console.log("Ejercicio 1");

const Cabecera = new Cabecera_pagina("Una nuve pagina", "Rojo", "Verdana");
Cabecera.Obtener_alineacion("Centrado");

Cabecera.mostrar_datos();


//Aqui muestro los datos del segundo ejercicio mostrados en consola 
console.log("Ejercicio 2")

const mostrar_datos = new calculadora();

console.log(`Suma: ${mostrar_datos.sumar(5,3)}`);
console.log(`Restar : ${mostrar_datos.restar(5,3)}`);
console.log(`Multiplicacion : ${mostrar_datos.multiplicar(2,2)}`);
console.log(`Dividir : ${mostrar_datos.dividir(4.,2)}`);
console.log(`Potenciar : ${mostrar_datos.potenciar(2,2)}`);
console.log(`Factorial : ${mostrar_datos.factorial(5)}`);

//Mostrar los datos del ejercicio 3 todos se muestran en consola

console.log("Ejercicio 3");

const cancion = new Cancion('Amor de cine', 'Romantica');
cancion.setAutor('Humbe')

console.log(`Titulo de la cancion : ${cancion.titulo}`);
console.log(`Cancion : ${cancion.cancion}`);
console.log(`Autor : ${cancion.getAutor()}`);


//Mostrar datos del ejercicio 4 mostrados en consola

console.log("Ejercicio 4");

const cuenta = new Cuenta('Rodrigo', 7802, 'De ahorros', 82910219);

cuenta.mostrar_datos_de_cuenta();

//Aqui puede probar el metodo de depositar cumple con su condicion de sino es igual o mayor a $5.00 error.
cuenta.despositar(6)

//Aqui puede probar el metodo de retiro 
cuenta.retirar(200)


//Mostrar los datos del ejercicio 5
console.log("Ejercicio 5");

const Empleado = new empleado ('Rodrigo', 'Escobar', 'Santa Ana', 921912, 19, 2000);

Empleado.Mostrar_datos_personales();

Empleado.cargarSueldo(2000);

Empleado.imprimir_salario()
