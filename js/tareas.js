//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert ("Mensaje Nuevo");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write)

document.write("<h1>Hello World</h1>");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write("<p>El resultado de la suma es: " +(3+5) + "</p>");


//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let nombre= prompt("Escriba su nombre de usuario");
document.write("<p>Hola " +  nombre +"</p>");


//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let num1=parseInt( prompt("Escriba un número"));

let num2= parseInt(prompt("Escriba otro número"));

document.write("<p> La suma es: " + (num1+num2)+ "</p>");
