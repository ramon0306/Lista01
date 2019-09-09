const lampada = document.querySelector("#lampada");
const lampada2 = document.querySelector("#botao");
var acesa = false;


lampada2.onclick=function(){
	if(acesa){
		lampada.src="apagada.png";
		acesa=false;
		lampada2.value="acender";
	}else{
		lampada.src="acesa.png";
		acesa=true;
		lampada2.value="apagar";

	}
	
}
