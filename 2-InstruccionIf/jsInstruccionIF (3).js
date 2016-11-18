function Mostrar()
{
//tomo la edad
	var edad;  
	if (document.getElementById('edad').value=="")
	{
		alert("Omitió ingresar su edad");
	}
	else
	{
		edad=document.getElementById('edad').value;
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