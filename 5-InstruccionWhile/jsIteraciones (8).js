function Mostrar()
{
	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta = "si";

	while (respuesta == "si")
	{
		contador ++;
		acumulador = acumulador + parseInt(prompt("Ingrese un número"));
		respuesta = prompt("¿Desea ingresar un nuevo número?");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}
//FIN DE LA FUNCIÓN