function Mostrar()
{
	var numero;

	numero = prompt("Ingrese un número entre 0 y 10");

	while (numero > 10)
	{
		alert ("Debe ingresar un número entre el 0 y el 10");
		numero = prompt("Ingrese un número entre 0 y 10");
	}
	alert ("Su numero es " + numero);
}
//FIN DE LA FUNCIÓN