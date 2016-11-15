/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar(){	
	var uno=parseInt(document.getElementById('numeroUno').value);
	var dos=parseInt(document.getElementById('numeroDos').value);
	var operacion=uno + dos;
	alert("La suma es " + operacion);
	}

function restar(){
	var uno=parseInt(document.getElementById('numeroUno').value);
	var dos=parseInt(document.getElementById('numeroDos').value);
	var operacion=uno - dos;
	alert("La resta es " + operacion);
}

function multiplicar(){ 
	var uno=parseInt(document.getElementById('numeroUno').value);
	var dos=parseInt(document.getElementById('numeroDos').value);
	var operacion=uno * dos;
	alert("La multiplicación es " + operacion);
}

function dividir(){
	var uno=parseInt(document.getElementById('numeroUno').value);
	var dos=parseInt(document.getElementById('numeroDos').value);
	var operacion=uno / dos;
	if (dos==0) {
		alert("No se puede dividir por 0");
	}
	else{
		alert("La división es " + operacion);
	} 	
}

//== compara
//if ==> si...
//else ==> sino...