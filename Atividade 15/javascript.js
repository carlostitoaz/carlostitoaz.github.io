var texto_email, resultado;

texto_email = window.prompt("Informe o email","Email");

funcao_validar_email(texto_email);

function funcao_validar_email(email_informado){
	var posicao_arroba,caracterProcurado="@",email_valido=0;
	
	posicao_arroba = email_informado.indexOf("@");
	
	cont_arroba = funcao_arroba(email_informado,caracterProcurado);
	
	if((cont_arroba==1)&&(posicao_arroba-1>=1)){
	
		if((email_informado.length - posicao_arroba>=1)&&(email_informado[posicao_arroba+1]!=".")){
			
			for(var i=posicao_arroba+2;i<email_informado.length;i++){
				if(email_informado[i]=="."){
					if((email_informado[i+1]!=".")&&(email_informado[i+2]!=".")){
						email_valido="Email válido!";
					}
				}
			}

		}else{
			email_valido="Email inválido!";
		}
	
	}else{
		email_valido="Email inválido!";
	}
	return window.alert(email_valido);
}

	function funcao_arroba(t_email, caracter){
		return t_email.split(caracter).length - 1;
	}
	





