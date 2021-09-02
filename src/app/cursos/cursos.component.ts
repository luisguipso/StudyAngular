import { CursosService } from "./cursos.service";
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];
  selectedCurso: string = '';

  constructor(private cursosService: CursosService) { //injetando a dependencia no construtor do component
    this.nomePortal = 'http://luis.training';

    //var servico = new CursosService(); instanciando sem injeção de dependencias
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
    this.selectedCurso = 'alert-info';
    this.mostraSelecionado();
    this.cursos = ['alert-success','alert-info','alert-warning','alert-danger'];
  }

  mostraSelecionado() {
    console.log(this.selectedCurso);
  }
}
