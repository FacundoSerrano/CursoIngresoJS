function Mostrar()
{
//tomo la edad  
	var mes;
	mes = document.getElementById('mes').value;
	switch (mes)
	{
    case "Enero":
        alert("Que comiences bien el año!");
        break;
    case "Marzo":
        alert("A clases!");
        break;
    case "Julio":
        alert("Se vienen las vacaciones!");
        break;
    case "Diciembre":
        alert("Felices fiestas!");
        break;
    case "Febrero":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        alert("Es un año duro...");
        break;
    }
}
//FIN DE LA FUNCIÓN