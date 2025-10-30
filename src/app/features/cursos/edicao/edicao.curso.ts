import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-edicao.curso',
  imports: [HeaderIndicatorPageComponent, NgxMaskDirective],
  templateUrl: './edicao.curso.html',
  styleUrl: './edicao.curso.scss'
})
export class EdicaoCurso {

}
