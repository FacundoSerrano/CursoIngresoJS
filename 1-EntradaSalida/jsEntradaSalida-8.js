/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var stringDividendo=document.getElementById('numeroDividendo').value;
var dividendo=parseInt(stringDividendo);
var stringDivisor=document.getElementById('numeroDivisor').value;
var divisor=parseInt(stringDivisor);
var resto=dividendo % divisor;
alert("El resto es " + resto);
//Con % (modulo) se obtiene el resto de una división 
}
