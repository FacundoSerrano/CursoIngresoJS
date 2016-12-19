function Perimetro ()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	precio1 = parseInt(document.getElementById('Precio1').value);
	precio2 = parseInt(document.getElementById('Precio2').value);
	precio3 = parseInt(document.getElementById('Precio3').value);
	suma = precio1 + precio2 + precio3;
	promedio = suma / 3;
	alert("La suma de los precios es $" + suma + ", y el promedio es $" + promedio);
}