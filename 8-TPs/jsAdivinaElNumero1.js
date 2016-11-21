/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	contadorIntentos = 0;
	alert("El juego ha comenzado");
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
}

function verificar()
{
	var numero;

	contadorIntentos = contadorIntentos + 1;
	numero = document.getElementById('numero').value;

	if (numeroSecreto == null)
	{
		alert("Olvidó comenzar el juego");
	}
	else if (numero == "")
	{
		alert("Olvidó ingresar un número");
	}
	else if (numero == numeroSecreto)
	{
		alert("Usted es un ganador!" + "\nY en solo " + contadorIntentos + " intentos");
	}
	else if (numero > numeroSecreto)
	{
		alert("Se pasó...");
	}
	else
	{
		alert("Falta...");
	}
}