import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https:luis-training.com";
  cursoAngular: boolean = true;
  selectedCurso: string = '';
  urlImagem: string = "http://lorempixel.com/400/200/";

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  //input property
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;




  constructor() {
  }

  ngOnInit(): void {
    this.selectedCurso = 'alert-info';
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado(){
    alert('clicou no botão!');
  }


  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
   console.log((<HTMLInputElement>event.target).value); /* pega o valor do imput pelo evento de digitação*/
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  };

  onMouseOverOut() {
    /* nega o valor, sempre que haver alguma ação de mouse over ou on */
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event: any) {
    console.log(event.novoValor);
  }
}
