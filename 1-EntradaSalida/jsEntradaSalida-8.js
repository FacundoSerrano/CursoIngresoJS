/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto(){
	if(document.getElementById('numeroDividendo').value=="" && document.getElementById('numeroDivisor').value=="") {
		alert("Omitió ingresar los números");
	}
	else{
		if(document.getElementById('numeroDividendo').value=="") {
			alert("Omitió ingresar el dividendo");
		}
		else{
			if(document.getElementById('numeroDivisor').value=="") {
				alert("Omitió ingresar el divisor");
			}
			else{
				var dividendo=parseInt(document.getElementById('numeroDividendo').value);
				var divisor=parseInt(document.getElementById('numeroDivisor').value);
				if(divisor==0) {
					alert("No se puede dividir por 0")
				}
				else{
					var resto=dividendo % divisor;
					alert("El resto es " + resto); 
				}
			}
		}
	}
}
//Con % (modulo) se obtiene el resto de una división