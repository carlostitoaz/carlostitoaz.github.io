
var numero,resposta;
numero = window.prompt("Informe um número");

resposta = funcao_impar_par(numero);

window.alert(resposta);

function funcao_impar_par(n){
	var x="";
	
	if(n%2==0){
		x="O número é par";
	}else{
		x="O número é ímpar";
	}
	
	return x;
}