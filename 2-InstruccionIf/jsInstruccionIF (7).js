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
		if (document.getElementById('estadoCivil').value=="Soltero")
		{
			if (edad>=18)
			{
				alert("Ya tiene edad para casarse");
			}
			else
			{
				alert("Es correcto que esté soltero a su edad");
			}
		}
		if (document.getElementById('estadoCivil').value=="Casado")
		{
			if (edad>=18)
			{
				alert("Ya tiene edad para estar casado");
			}
			else
			{
				alert("Usted es muy joven para no ser soltero");
			}
		}
		if (document.getElementById('estadoCivil').value=="Divorciado")
		{
			if (edad>=18)
			{
				alert("Puede volver a casarse");
			}
			else
			{
				alert("Usted es muy joven para no ser soltero");
			}
		}
	}
}
//FIN DE LA FUNCIÓN