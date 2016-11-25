/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var resultado;

function comenzar()
{
	var randomUno;
	var randomDos;
	var randomOperacion;
	
	randomUno = Math.floor((Math.random() * 10) + 1);
	randomDos = Math.floor((Math.random() * 10) + 1);
	randomOperacion = Math.floor((Math.random() * 4) + 1);

	switch (randomOperacion)
	{
		case 1:
		{
			resultado = parseInt(randomUno) + parseInt(randomDos);
			document.getElementById('Operador').value = "Más";
			break;
		}
		case 2:
		{
			if (randomUno < randomDos)
			{
				comenzar();
			}
			else
			{
				resultado = randomUno - randomDos;
				document.getElementById('Operador').value = "Menos";
				break;
			}
		}
		case 3:
		{
			if ((randomUno < randomDos) && ((randomUno % randomDos) != 0))
			{
				comenzar();
			}
			else
			{
				resultado = randomUno / randomDos;
				document.getElementById('Operador').value = "Dividido";
				break;
			}
		}
		case 4:
		{
			resultado = randomUno * randomDos;
			document.getElementById('Operador').value = "Por";
			break;
		}
	}

	document.getElementById('PrimerNumero').value = randomUno;
	document.getElementById('SegundoNumero').value = randomDos;
}
//FIN DE LA FUNCIÓN

function Responder()
{
	var respuesta

	respuesta = document.getElementById('Respuesta').value;
	
	if (respuesta == resultado)
	{
		alert("Correcto");
	}
	else
	{
		alert("Incorrecto");
	}
}
//FIN DE LA FUNCIÓN