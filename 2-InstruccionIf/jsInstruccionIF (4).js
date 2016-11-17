function Mostrar(){
//tomo la edad  
	if (document.getElementById('edad').value=="") {
		alert("Omitió ingresar su edad");
	}
	else {
		var edad=parseInt(document.getElementById('edad').value);
		if (edad>=13 && edad<=17) {
			alert("Usted es adolescente");
		}
		else {
			alert("Usted no es adolescente");
		}
	}
}
//FIN DE LA FUNCIÓN