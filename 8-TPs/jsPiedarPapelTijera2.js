var eleccionMaquina;
var contadorDeEmpates = 0;
var contadorDeGanadas = 0;
var contadorDePerdidas = 0;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);
}
//Genero el número RANDOM entre 1 y 3
//alert(eleccionMaquina);
//FIN DE LA FUNCIÓN

function piedra()
{
	var eleccionJugador;

	eleccionJugador = 1;

	if (eleccionJugador == eleccionMaquina)
	{
		alert("Empató");
		contadorDeEmpates ++;
	}
	else if (eleccionMaquina == 2)
	{
		alert("Perdió");
		contadorDePerdidas ++;
	}
	else
	{
		alert("Ganó");
		contadorDeGanadas ++;
	}

	mostarResultado();
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
		contadorDeEmpates ++;
	}
	else if (eleccionMaquina == 3)
	{
		alert("Perdió");
		contadorDePerdidas ++;
	}
	else
	{
		alert("Ganó");
		contadorDeGanadas ++;
	}

	mostarResultado();
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
		contadorDeEmpates ++;
	}
	else if (eleccionMaquina == 1)
	{
		alert("Perdió");
		contadorDePerdidas ++;
	}
	else
	{
		alert("Ganó");
		contadorDeGanadas ++;
	}

	mostarResultado();
	comenzar();
}
//FIN DE LA FUNCIÓN

function mostarResultado()
{
	document.getElementById('ganadas').value = contadorDeGanadas;
	document.getElementById('perdidas').value = contadorDePerdidas;
	document.getElementById('empatadas').value = contadorDeEmpates;
}