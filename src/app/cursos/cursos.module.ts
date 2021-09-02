import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from "./cursos.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
