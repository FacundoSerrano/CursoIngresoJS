function Mostrar()
{
	var contador;
	var acumulador;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while (respuesta == "si")
	{
		contador ++;
		acumulador = acumulador + parseInt(prompt("Ingrese un número"));
		respuesta = prompt("¿Desea ingresar un nuevo número?");
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}
//FIN DE LA FUNCIÓN