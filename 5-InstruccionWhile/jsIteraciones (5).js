function Mostrar()
{
	var sexo;

	sexo = prompt("Ingrese F ó M");

	while (sexo != "F" && sexo != "f" && sexo != "M" && sexo != "m")
	{
		alert ("Debe indicar si es Masculino ó Femenino");
		sexo = prompt("Ingrese F ó M");
	}

	document.getElementById('Sexo').value = "Sexo " + sexo;
}
//FIN DE LA FUNCIÓN