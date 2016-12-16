function Mostrar()
{
	var clave;

	clave = prompt ("Ingrese la clave");

	while (clave != "utn750")
	{
			alert ("La clave es incorrecta");
			clave = prompt ("Ingrese la clave");			
	}
	alert ("La clave es correcta");
}
//FIN DE LA FUNCIÓN