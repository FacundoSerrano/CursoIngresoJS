/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);
}
//FIN DE LA FUNCIÓN
function piedra()
{
	var eleccionJugador;

	eleccionJugador = 1;

	if (eleccionJugador == eleccionMaquina)
	{
		alert("Empató");
	}
	else if (eleccionMaquina == 2)
	{
		alert("Perdió");
	}
	else
	{
		alert("Ganó");
	}

	comenzar();
}
//FIN DE LA FUNCIÓN

function papel()
{
	var eleccionJugador;

	eleccionJugador = 2;

	if (eleccionJugador == eleccionMaquina)
	{
		alert("Empató");
	}
	else if (eleccionMaquina == 3)
	{
		alert("Perdió");
	}
	else
	{
		alert("Ganó");
	}

	comenzar();
}
//FIN DE LA FUNCIÓN
function tijera()
{
	var eleccionJugador;

	eleccionJugador = 3;

	if (eleccionJugador == eleccionMaquina)
	{
		alert("Empató");
	}
	else if (eleccionMaquina == 1)
	{
		alert("Perdió");
	}
	else
	{
		alert("Ganó");
	}

	comenzar();
}
//FIN DE LA FUNCIÓN