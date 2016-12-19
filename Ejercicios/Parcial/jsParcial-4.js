function Cuenta ()
{
	var numero1;
	var numero2;
	var resultado;
	
	numero1 = prompt("Ingrese el primer número");
	numero2 = prompt("Ingrese el segundo número");

	if (numero1 == numero2)
	{
		resultado = numero1 * numero2;
	}
	else if (numero1 > numero2)
	{
		resultado = numero1 - numero2;
	}
	else
	{
		resultado = (parseInt(numero1) + parseInt(numero2));
	}

	document.write("El resultado es " + resultado);
}