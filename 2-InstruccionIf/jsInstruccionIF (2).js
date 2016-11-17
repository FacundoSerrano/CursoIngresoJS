function Mostrar()
{
//tomo la edad  
	if (document.getElementById('edad').value=="")
	{
		alert("Omitió ingresar su edad");
	}
	else
	{
		var edad=parseInt(document.getElementById('edad').value);
		if (edad>=18)
		{
			alert("Usted es mayor de edad");
		}
		else
		{
			alert("Usted no es mayor de edad");
		}
	}
}
//FIN DE LA FUNCIÓN