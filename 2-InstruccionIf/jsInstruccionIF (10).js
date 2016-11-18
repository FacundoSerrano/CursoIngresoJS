function Mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor((Math.random() * 10) + 1);
	if (numero>=9)
	{
		alert("Nota " + numero + "\nExcelente");
	}
	else
	{
		if (numero>=4 && numero<9)
		{
			alert("Nota " + numero + "\nAprobó");
		}
		else
		{
			alert("Nota " + numero + "\nVamos, la proxima se puede!");
		}
	}
}
//FIN DE LA FUNCIÓN