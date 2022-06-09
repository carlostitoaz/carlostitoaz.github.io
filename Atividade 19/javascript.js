var estado="desligado";

function funcao_lampada(){
	if(estado=="desligado"){
		document.getElementById('lampada').src='lampada_on.gif';
		estado="ligado";
	}else{
		document.getElementById('lampada').src='lampada_off.gif';
		estado="desligado";
	}
}

