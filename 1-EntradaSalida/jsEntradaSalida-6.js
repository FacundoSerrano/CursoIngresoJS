/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar(){
	var uno;
	var dos;
	var resultado
	if(document.getElementById('numeroUno').value=="" && document.getElementById('numeroDos').value=="") {
		alert("Omitió ingresar los números");
	}
	else
	{
		if(document.getElementById('numeroUno').value=="")
		{
			alert("Omitió ingresar el número Uno");
		}
		else
		{
			if (document.getElementById('numeroDos').value=="")
			{
				alert("Omitió ingresar el número Dos");
			}
			else
			{
				uno=parseInt(document.getElementById('numeroUno').value);
				dos=parseInt(document.getElementById('numeroDos').value);
				resultado=uno + dos;
				alert("El resultado es " + resultado);
			}
		}
	}
}
//Para que un numero deje de ser un string y pase a ser un numero entero se usa parseInt
//Para sumar dentro de un alert se debe hacer dentro de otros parentesis.
//Consulta: ¿Conviene asignar mas variables o ahorrar código?