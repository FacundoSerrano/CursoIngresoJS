/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar(){
	var miTexto;
	miTexto=prompt("Por favor ingrese su nombre:");
	if(miTexto=="") {
		alert("Omitió indicar su nombre");	
	}
	else{
		document.getElementById('elNombre').value=miTexto;
	}
}
//prompt siempre posee un campo para completar