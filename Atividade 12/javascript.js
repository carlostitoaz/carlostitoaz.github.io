funcao_palindromo();

function funcao_palindromo(){
	var palavra,cont,x,resultado_comparar=0,i;
	var palavra_invertida = new Array(cont);
	var palavra_normal = new Array(cont);
	
	palavra = window.prompt("Informe a palavra");
	cont = palavra.length;
	
	x = cont - 1;
	
	for(i=0;i<cont;i++){
		palavra_invertida[x] = palavra[i];
		palavra_normal[i] = palavra[i];
		x--;
	}
	
	for(i=0;i<cont;i++){
		if(palavra_normal[i]==palavra_invertida[i]){
			resultado_comparar++;
		}
	}
	
	if(resultado_comparar==i){
		window.alert("É um palíndromo");
	}else{
		window.alert("Não é um palíndromo");
	}
	
	// console.log(palavra_invertida);
	// console.log(palavra_normal);
	// console.log(palavra);

}