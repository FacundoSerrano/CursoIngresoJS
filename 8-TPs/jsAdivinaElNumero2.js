/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	contadorIntentos = 0;
	alert("El juego ha comenzado"); 
}

function verificar()
{
	var numero;

	contadorIntentos ++;
	numero = document.getElementById('numero').value;

	if (numeroSecreto == null)
	{
		alert("Olvidó comenzar el juego");
	}
	else if (numero == "")
	{
		alert("Olvidó ingresar un número");
	}
	else if (numero == numeroSecreto && contadorIntentos == 1)
	{
		alert("Usted es un psíquico!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && contadorIntentos == 2)
	{
		alert("Excelente percepción!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && contadorIntentos == 3)
	{
		alert("Esto es suerte!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && contadorIntentos == 4)
	{
		alert("Excelente técnica!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && contadorIntentos == 5)
	{
		alert("Usted está en la media!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && (contadorIntentos >= 6 && contadorIntentos <= 10))
	{
		alert("Falta técnica!" + "\nLo consiguió en " + contadorIntentos + " intentos");
	}
	else if (numero == numeroSecreto && contadorIntentos > 10)
	{
		alert("Afortunado en el amor!" + "\nLo consiguió en " + contadorIntentos + " intentos");
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