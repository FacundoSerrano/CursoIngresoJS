/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var aumento;
	if(document.getElementById('sueldo').value=="")
	{
		alert("Omitió ingresar el sueldo");
	}
	else
	{
		sueldo=document.getElementById('sueldo').value;
		aumento=sueldo * 1.1;
		document.getElementById('resultado').value=Math.round(aumento);
	}
}
//una constante como 1.1 (10%) no hace falta asignarlo como una variable	
//Math.round (con mayus al comienzo) redondea a valores enteros