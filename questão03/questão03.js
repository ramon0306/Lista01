var contagem=0;
var tempo;
var temp_cont=0;
			
function contando(){
	document.getElementById("txt").value=contagem;
	contagem = contagem + 1;
	tempo=setTimeout("contando()",1000);
}
function iniciar(){
	if (!temp_cont){
		temp_cont=1;
		contando();
		}
	}
function parar(){
	clearTimeout(tempo);
	temp_cont=0;
}
			
function zerar(){
	document.getElementById("txt").value = 0;	
}