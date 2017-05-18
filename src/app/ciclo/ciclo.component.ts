import { Component, Input, OnInit,OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked, AfterViewChecked, OnDestroy {

@Input() valorInicial: number = 10;

  constructor() { 
    console.log('construtor'+ this.valorInicial);
  }

  ngOnInit() {
    console.log('ngOnInit' + this.valorInicial);
  }

  ngOnChanges(){
    console.log('ngOnChanges'+ this.valorInicial);
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
