/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar(){
	var miVariable=document.getElementById('elNombre').value;
	if(miVariable=="") {
		alert("Omitió indicar su nombre");	
	}
	else{
		alert(miVariable);
	}
}
//"CamelCase" si la variable tiene varias palabras, la primera siempre va en minus, y las otras comienzan con mayus.
//document. + tab
//.value asigna el valor a un objeto