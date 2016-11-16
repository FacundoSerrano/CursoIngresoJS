/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar(){	
	if(document.getElementById('numeroUno').value=="" && document.getElementById('numeroDos').value=="") {
		alert("Omitió ingresar los números");
	}
	else{
		if(document.getElementById('numeroUno').value=="") {
			alert("Omitió ingresar el número Uno");
		}
		else{
			if (document.getElementById('numeroDos').value=="") {
				alert("Omitió ingresar el número Dos");
			}
			else{
				var uno=parseInt(document.getElementById('numeroUno').value);
				var dos=parseInt(document.getElementById('numeroDos').value);
				var resultado=uno + dos;
				alert("El resultado es " + resultado);
			}
		}
	}
}

function restar(){
	if(document.getElementById('numeroUno').value=="" && document.getElementById('numeroDos').value=="") {
		alert("Omitió ingresar los números");
	}
	else{
		if(document.getElementById('numeroUno').value=="") {
			alert("Omitió ingresar el número Uno");
		}
		else{
			if (document.getElementById('numeroDos').value=="") {
				alert("Omitió ingresar el número Dos");
			}
			else{
				var uno=parseInt(document.getElementById('numeroUno').value);
				var dos=parseInt(document.getElementById('numeroDos').value);
				var resultado=uno - dos;
				alert("El resultado es " + resultado);
			}
		}
	}
}

function multiplicar(){ 
	if(document.getElementById('numeroUno').value=="" && document.getElementById('numeroDos').value=="") {
		alert("Omitió ingresar los números");
	}
	else{
		if(document.getElementById('numeroUno').value=="") {
			alert("Omitió ingresar el número Uno");
		}
		else{
			if (document.getElementById('numeroDos').value=="") {
				alert("Omitió ingresar el número Dos");
			}
			else{
				var uno=parseInt(document.getElementById('numeroUno').value);
				var dos=parseInt(document.getElementById('numeroDos').value);
				var resultado=uno * dos;
				alert("El resultado es " + resultado);
			}
		}
	}
}

function dividir(){
	if(document.getElementById('numeroUno').value=="" && document.getElementById('numeroDos').value=="") {
		alert("Omitió ingresar los números");
	}
	else{
		if(document.getElementById('numeroUno').value=="") {
			alert("Omitió ingresar el número Uno");
		}
		else{
			if (document.getElementById('numeroDos').value=="") {
				alert("Omitió ingresar el número Dos");
			}
			else{
				var uno=parseInt(document.getElementById('numeroUno').value);
				var dos=parseInt(document.getElementById('numeroDos').value);
				if(dos==0) {
					alert("No se puede dividir por 0");
				}
				else{
					var resultado=uno / dos;
					alert("El resultado es " + resultado);
				}	
			}
		}
	} 	
}
//== compara
//if ==> si...
//else ==> sino...
//Consulta: ¿Se puede asignar una variable fija?