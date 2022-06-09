
function funcao_data(){
data_informada_usuario = new Date(document.getElementById('data_informada').value);
data_atual = new Date();

data_informada_usuario_dia = 1+data_informada_usuario.getDate();
data_informada_usuario_mes = 1+data_informada_usuario.getMonth();
data_informada_usuario_ano = data_informada_usuario.getFullYear();

data_atual_dia = 1+data_atual.getDate();
data_atual_mes = 1+data_atual.getMonth();
data_atual_ano = data_atual.getFullYear();

dia = data_atual_dia - data_informada_usuario_dia;
mes =  data_atual_mes - data_informada_usuario_mes;
ano =  data_atual_ano - data_informada_usuario_ano;

document.getElementById('resultado').innerHTML=ano+" Anos, "+mes+" Meses e "+dia+" Dias.";
}




