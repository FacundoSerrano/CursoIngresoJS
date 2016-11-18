/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	resultado=(((largo*2)+(ancho*2))*3);
	alert("Se deben comprar "+resultado+" metros de alambre");
}

function Circulo () 
{
	var radio;
	var diametro;
	var circunferencia;
	var resultado;
	radio=document.getElementById('Radio').value;
	diametro=2*radio;
	circunferencia=Math.PI*diametro;
	resultado=circunferencia*3;
	alert("Se deben comprar "+resultado+" metros de alambre");
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasCemento;
	var bolsasCal;
	largo=parseInt(document.getElementById('Largo').value);
	ancho=parseInt(document.getElementById('Ancho').value);
	area=largo*ancho;
	bolsasCemento=2*area;
	bolsasCal=3*area;
	alert("Se deben comprar "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal");
}