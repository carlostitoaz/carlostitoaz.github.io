function funcao_locadora(){
	data_e = new Date(document.getElementById('data_retirada').value);
	data_d = new Date(document.getElementById('data_devolucao').value);
	tipo_c = document.getElementById('tipo_carro').value;
	cidade_r = document.getElementById('cidade_r').value;
	cidade_e = document.getElementById('cidade_e').value;
	
	valor=0;
	taxa=0;
	data_e_dia = 1+data_e.getDate();
	data_d_dia = 1+data_d.getDate();
	
	dias_totais = data_d_dia - data_e_dia;
	
	if(cidade_r!=cidade_e){
		taxa=300;
	}
	
	if(tipo_c=="basico"){
		valor = (dias_totais*119)+taxa;
	}
	
	if(tipo_c=="basico_ar"){
		valor = (dias_totais*199)+taxa;
	}
	
	if(tipo_c=="executivo"){
		valor = (dias_totais*299)+taxa;
	}
	
	
	document.getElementById("resultado").innerHTML="Valor total a pagar: "+valor;
	//window.alert(valor);
		
}