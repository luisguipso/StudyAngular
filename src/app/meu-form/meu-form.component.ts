import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {
 // FormsModule deve ser importado no módulo onde o componente é utilizado,
  // nesse caso, meu-form-module, para que o Two-way data binding com [(ngModel)] funcione
  nome:string = 'abc';

  pessoa: any = {
    nome:'def',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

}
