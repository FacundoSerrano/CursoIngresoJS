/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultado;
	numero1=parseInt(document.getElementById('PrecioUno').value);
	numero2=parseInt(document.getElementById('PrecioDos').value);
	numero3=parseInt(document.getElementById('PrecioTres').value);
	resultado=numero1+numero2+numero3;
	alert(resultado);	
}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultado;
	numero1=parseInt(document.getElementById('PrecioUno').value);
	numero2=parseInt(document.getElementById('PrecioDos').value);
	numero3=parseInt(document.getElementById('PrecioTres').value);
	resultado=((numero1+numero2+numero3)/3);
	alert(resultado)
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var resultado;
	numero1=parseInt(document.getElementById('PrecioUno').value);
	numero2=parseInt(document.getElementById('PrecioDos').value);
	numero3=parseInt(document.getElementById('PrecioTres').value);
	resultado=((numero1+numero2+numero3)*1.21);
	alert(resultado)
}