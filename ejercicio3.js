//Titulo
document.write("<h1>Ejercicio 03</h1>");
document.write("<h3> Área y Perimetro de un cuadrado </h3>");
//Solicitar Información
var lado = parseInt(prompt("Ingrese el lado del cuadrado"));
//Proceso de datos
var area = lado * lado;
var perimetro = lado * 4;
//Mostrar la Información
document.write("El lado del cuadrado ingresado es: " + lado);
document.write("<br>");
document.write("El área del cuadrado es: " + area);
document.write("<br>");
document.write("El perímetro del cuadrado es: " + perimetro);
document.write("<br>");
document.write("<br>");
document.write("<h5>La aplicación fue creada por Sebastian Pachas</h5>");
