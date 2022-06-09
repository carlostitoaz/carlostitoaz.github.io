function clicar_botao(id_texto){
	var estado_display_texto = document.getElementById(id_texto).style.display;
	
	if(estado_display_texto == "block"){
		document.getElementById(id_texto).style.display='none';
	}else{
		document.getElementById(id_texto).style.display='block';
	}
}