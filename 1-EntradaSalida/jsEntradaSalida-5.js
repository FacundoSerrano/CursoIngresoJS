/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var miNombre=document.getElementById('elNombre').value;
	var miEdad=document.getElementById('laEdad').value;
	alert("Usted se llama " + miNombre + " y tiene " + miEdad + " años.");
	
}

