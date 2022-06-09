
function funcao_add_li(texto_digitado){
	var conteudo_lista = document.getElementById("lista").innerHTML;
	var texto = document.getElementById(texto_digitado).value;
	conteudo_lista = conteudo_lista +"<li>"+texto+"</li>";
	document.getElementById("lista").innerHTML = conteudo_lista;
	document.getElementById(texto_digitado).value="";
}