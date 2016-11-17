function Mostrar(){
//tomo la edad
	var edad;  
	if (document.getElementById('edad').value=="")
	{
		alert("Omitió ingresar su edad");
	}
	else
	{
		edad=parseInt(document.getElementById('edad').value);
		if (edad==15)
		{
			alert("Niña bonita!");
		}
		else 
		{
			alert("Usted no es una niña bonita");
		}
	}
}
//FIN DE LA FUNCIÓN