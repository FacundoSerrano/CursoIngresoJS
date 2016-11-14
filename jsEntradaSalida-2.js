/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{//var ---> iniciación simple de una variable
	// ej: var nombre;
	var nombre;
	var segundo_nombre;
	var apellido;
	//nombre="Facundo";
	nombre=prompt ("Ingrese su nombre", "N N");
	apellido=prompt ("Ingrese su apellido", "N N");
	segundo_nombre="José";
	//apellido="Serrano";
	alert("Mi nombre es: " + nombre + " " + segundo_nombre + "\nY mi apellido es: " + apellido);


//La ventana prompt, a diferencia del alert, siempre va a tener un comando seguido por = y el valor de la variable.
/*Para bajar una linea se usa \n*/
//En prompt "," asigna una variable por default
/* Barra + Asterisco permite crear comentarios sin limite de lineas. Se cierra con Asterisco + Barra*/

}