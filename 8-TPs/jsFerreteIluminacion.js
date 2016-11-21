/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidad;
 	var marca;
 	var precioFinal;
 	var impuesto;
 	var precioConImpuesto;

 	precio = 35;
 	cantidad = document.getElementById('Cantidad').value;
 	marca = document.getElementById('Marca').value;
 	descuentoCantidad = precio * 0.5;

 	if (cantidad>=6)
 	{
 		precioFinal = (cantidad * precio) * 0.5;
 	}
 	else if (cantidad == 5 && marca == "ArgentinaLuz")
 	{
 		precioFinal = (cantidad * precio) * 0.6;
 	}
 	else if (cantidad == 5 && marca != "ArgentinaLuz")
 	{
 		precioFinal = (cantidad * precio) * 0.7;
 	}
 	else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
 	{
 		precioFinal = (cantidad * precio) * 0.75;
 	}
 	else if (cantidad == 4 && (marca != "ArgentinaLuz" || marca == "FelipeLamparas"))
 	{
 		precioFinal = (cantidad * precio) * 0.8;
 	}
 	else if (cantidad == 3 && marca == "ArgentinaLuz")
 	{
 		precioFinal = (cantidad * precio) * 0.85;
 	}
 	else if (cantidad == 3 && marca == "FelipeLamparas")
 	{
 		precioFinal = (cantidad * precio) * 0.9;
 	}
 	else if (cantidad == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas"))
 	{
 		precioFinal = (cantidad * precio) * 0.95;
 	}
 	else
 	{
 		precioFinal = (cantidad * precio);
 	}
 	if (precioFinal > "120")
 	{	
 		impuesto = precioFinal * 0.1;
 		precioConImpuesto = precioFinal + impuesto;
 		document.getElementById('precioDescuento').value = Math.floor(precioConImpuesto);
 		alert("IIBB Usted pagó $" + Math.floor(impuesto));
 	}
 	else
 	{
 		document.getElementById('precioDescuento').value = Math.floor(precioFinal);
 	}
}