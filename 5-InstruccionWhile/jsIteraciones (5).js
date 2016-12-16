function Mostrar()
{
	var sexo;

	sexo = prompt("Ingrese F ó M");

	while (sexo != "F" && sexo != "f" && sexo != "M" && sexo != "m")
	{
		alert ("Debe indicar si es Masculino ó Femenino");
		sexo = prompt("Ingrese F ó M");
	}

	alert ("Sexo " + sexo);
}//FIN DE LA FUNCIÓN