import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() valorAlterado = new EventEmitter();
  
  incrementar(){
    this.valor++;
    this.valorAlterado.emit({novoValor: this.valor});
  }

  decrementar(){
    this.valor--;
    this.valorAlterado.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
