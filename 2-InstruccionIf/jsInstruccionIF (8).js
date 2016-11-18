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
		edad=parseInt(document.getElementById('edad').value);
		if (document.getElementById('estadoCivil').value=="Soltero")
		{
			if (edad>=18)
			{
				alert("Es soltero y no es menor");
			}
			else
			{
				alert("Es correcto que este soltero a su edad");
			}
		}
		else
		{
			alert("Solo atendemos solteros");
		}
	}
}
//FIN DE LA FUNCIÓN