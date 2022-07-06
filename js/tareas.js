//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

/*alert ("Mensaje Nuevo");*/

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write)

//document.write("<h1>Hello World</h1>");*/

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

/*document.write("<p>El resultado de la suma es: " +(3+5) + "</p>");*/


//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

/*let nombre= prompt("Escriba su nombre de usuario");
document.write("<p>Hola " +  nombre +"</p>");*/


//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

/*let num1=parseInt( prompt("Escriba un número"));

let num2= parseInt(prompt("Escriba otro número"));

document.write("<p> La suma es: " + (num1+num2)+ "</p>");*/

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/*let n1 = parseInt(prompt("Escriba un número"));
let n2 = parseInt(prompt("Escriba otro número"));

if(n1 > n2){
    document.write("El número " + (n1) + " es mayor");
}else if(n1===n2){
    document.write("El número " + (n1) + " es igual a " + (n2));
}else if(n1 < n2){
    document.write("El número " +(n2) + " es mayor a " + (n1));
}*/

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*let num1 = parseInt(prompt("Escriba el primer número"));
let num2 = parseInt(prompt("Ecriba el segundo número"));
let num3 = parseInt(prompt("escriba el tercer número"));

if(num1 > num2 && num1 > num3){
    document.write("El número " + (num1) + " es mayor");
}else if(num2 > num1 && num2 > num3){
    document.write("El número " + (num2) + " es mayor");
}else if(num3 > num1 && num3 > num2){
    document.write("El número " + (num3) + " es mayor");
}else if(num1===num2 || num1===num3 ||num2===num3){
    document.write("Los números son iguales");
}*/

//8.- Escribe un programa que pida un número y diga si es divisible por 2

/*let num = parseInt(prompt("escribe un número"));

if(num % 2===0){
    document.write("El número es par");
}else{
    document.write("El número es impar");
}*/

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)



/*let frase = prompt("ingresa una frase");

document.write(`Las vocales que aparecen en la frase ${frase} son: `);

if (frase.includes("a")) {
  document.write("a");
}

if (frase.includes("e")) {
  document.write("e");
}

if (frase.includes("i")) {
  document.write("i");
}

if (frase.includes("o")) {
  document.write("o");
}

if (frase.includes("u")) {
  document.write("u");
}*/

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

/*et n1 = prompt("Escribe un número");
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}*/

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible hay que decir todos por los que es divisible

let n1 = parseInt( prompt("Escribe un número"));
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (n1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (n1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (n1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}