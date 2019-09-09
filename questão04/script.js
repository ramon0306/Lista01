document.addEventListener('DOMContentLoaded', function() {

  const galeria = function(){

  this.stream = document.querySelector('.gallery__stream');
  this.item = document.querySelectorAll('.gallery__item');
  this.passNext = document.querySelector("#prox");
  this.passPrev = document.querySelector("#ant");
  this.check = document.querySelector("#check");
  this.prev = document.querySelector('.gallery__prev');
  this.next = document.querySelector('.gallery__next');

  this.anterior =  function() {
      this.stream.appendChild(this.item[0]);
      this.item = document.querySelectorAll('.gallery__item');
    }
   this.prox = function() {
      this.stream.insertBefore(this.item[this.item.length - 1], this.item[0]);
      this.item = document.querySelectorAll('.gallery__item');
    }

  this.mouseover = function(){
    if (this.check.checked) {
    this.prev.removeEventListener('mouseover', this.anterior);
    this.next.removeEventListener('mouseover', this.prox);
  }else{
    this.prev.addEventListener('mouseover', this.anterior);
    this.next.addEventListener('mouseover', this.prox);
  }
}
let galeria = new galeria();
galeria.passPrev.onclick = galeria.anterior;
galeria.passNext.onclick = galeria.prox;
galeria.check.onchange = galeria.mouseover;

}});