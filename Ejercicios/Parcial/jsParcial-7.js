function Cerco ()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	perimetro = (largo * 2) + (ancho * 2);
	alambre = perimetro * 3;
	alert("Se necesitarán " + alambre + " metros de alambre");
}