const mudarCor = document.querySelector("#cor");
const trocaCor = document.querySelector("#troca");

trocaCor.onclick= function(){
	document.body.style.backgroundColor="#"+mudarCor.value;
	
}