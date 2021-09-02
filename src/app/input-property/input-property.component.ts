import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  //variavel que vem de outro component 'data-binding-component, via input property'
  // 'nome' é o nome de variavel que será exposto e usado no html com property binding, nesse caso
  // =  [nome]=""
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
