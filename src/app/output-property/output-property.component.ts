import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valor: number = 0;

  //cria um evento que emite informações para o componente pai 'data-binding-component'
  @Output() mudouValor = new EventEmitter();


  incrementa() {
    this.valor++;
    //emite um objeto com a variavel novo valor
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--;
  }


}
