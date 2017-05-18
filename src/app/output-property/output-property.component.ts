import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() valorAlterado = new EventEmitter();
  
@ViewChild('campoInput') campoValorInput: ElementRef;

  incrementar(){
    this.campoValorInput.nativeElement.value++;
    this.valorAlterado.emit({novoValor: this.valor});
  }

  decrementar(){
    this.campoValorInput.nativeElement.value--;
    this.valorAlterado.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
