/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var descuento;
	if(document.getElementById('importe').value=="")
	{
		alert("Omitió ingresar el importe");
	}
	else{
		importe=document.getElementById('importe').value;
		descuento=importe * 0.75;
		document.getElementById('resultado').value=Math.round(descuento);
	}
}