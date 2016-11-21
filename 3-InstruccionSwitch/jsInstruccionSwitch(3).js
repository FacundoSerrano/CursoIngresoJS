function Mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;
	switch (mesDelAño)
	{
    case "Febrero":
        alert("Este mes no tiene más de 29 días");
        break;
    default:
        alert("Este mes tiene 30 o más días");
        break;
    }
}
//default es el else de switch
//FIN DE LA FUNCIÓN
//alert (mesDelAño);