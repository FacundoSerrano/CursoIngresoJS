function Mostrar()
{
	var contador;
	var acumulador;
	
	contador = 0;
	acumulador = 0;

	while (contador < 5)
	{
		contador ++;
		acumulador = (acumulador + parseInt(prompt("Ingrese un número")));
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;
}
//FIN DE LA FUNCIÓN