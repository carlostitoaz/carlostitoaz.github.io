var numero;
var texto1="Informe um número", texto2="Digite";

numero = window.prompt(texto1,texto2);

window.alert(funcao_fatorial(numero));

function funcao_fatorial(valor){
	var resultado=1;
	
	for(var i=2;i<=valor;i++){
		resultado = resultado*i; 
	}
	return resultado;
}

