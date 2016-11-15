/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{//prompt siempre posee un campo para completar
	var miTexto;
	miTexto=prompt("Por favor ingrese un texto");
	document.getElementById('elNombre').value=miTexto;
}

