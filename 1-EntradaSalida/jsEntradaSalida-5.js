/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar(){	
	var miNombre=document.getElementById('elNombre').value;
	var miEdad=document.getElementById('laEdad').value;	
	if(miNombre=="" && miEdad=="") {
		alert("Omitió indicar su información personal");
	}
	else{
		if(miNombre=="") {
			alert("Omitió indicar su nombre");
		}
		else{
			if (miEdad=="") {
				alert("Omitió indicar su edad");
			}
			else{
				alert("Usted se llama " + miNombre + " y tiene " + miEdad + " años.");
			}
		}
	}
}