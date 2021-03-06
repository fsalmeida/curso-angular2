import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: string = 'http://loiane.com'
urlImagem = 'http://lorempixel.com/400/200/nature/';
valorAtual: string = '';
valorSalvo: string = '';
isMouseOver: boolean = false;

nomeDoCurso: string = `Angular`;

  constructor() { }

  ngOnInit() {
  }

valorAlterado($event){
  console.log($event.novoValor);
}

botaoClicado(){
  alert('Botao clicado');
}

onKeyUp(evento: KeyboardEvent){
  this.valorAtual = (<HTMLInputElement>evento.target).value;
}

salvarValor(valor){
  this.valorSalvo = valor; 
}

onMouseOverOut(){
this.isMouseOver = !this.isMouseOver; 
}



}