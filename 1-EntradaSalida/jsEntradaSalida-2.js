/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	var apellido;
	nombre=prompt ("Ingrese su nombre");
	apellido=prompt ("Ingrese su apellido");
	if(nombre=="" && apellido=="")
	{
		alert("Omite indicar su información personal");
	}
	else
	{
		if(nombre=="")
		{
			alert("Omitió indicar su nombre");
		}
		else
		{
			if (apellido=="")
			{
				alert("Omitió indicar su apellido");
			}
			else
			{
				alert("Su nombre es: " + nombre + "\nY su apellido es: " + apellido);
			}
		}
	}
}
//var ---> iniciación simple de una variable
//Ej: var nombre;
//La ventana prompt, a diferencia del alert, siempre va a tener un comando seguido por = y el valor de la variable.
//Para bajar una linea se usa \n
//En prompt "," asigna una variable por default
/*Barra + Asterisco permite crear comentarios sin limite de lineas. Se cierra con Asterisco + Barra*/
//&& para "y"
//|| para "o"