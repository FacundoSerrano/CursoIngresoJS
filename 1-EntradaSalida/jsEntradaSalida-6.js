/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var uno=parseInt(document.getElementById('numeroUno').value);
var dos=parseInt(document.getElementById('numeroDos').value);
var resultado=uno + dos;
alert("El resultado es " + resultado);
//Para que un numero deje de ser un string y pase a ser un numero entero se usa parseInt
//Para sumar dentro de un alert se debe hacer dentro de otros parentesis.
}

