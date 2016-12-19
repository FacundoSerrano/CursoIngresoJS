function DiaDeSemana ()
{
	var dia;
		
	dia = prompt("Ingrese que día de la semana es");
	
	switch (dia)
	{
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar!");
			break;
		case "Sabado":
		case "Domingo":
			alert("Es fin de semana!");
			break;
	}
}