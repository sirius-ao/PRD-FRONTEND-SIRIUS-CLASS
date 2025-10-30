import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-registrar.curso',
  templateUrl: './registrar.curso.html',
  styleUrl: './registrar.curso.scss',
  imports: [NgxMaskDirective, HeaderIndicatorPageComponent],
  providers: []
})
export class RegistrarCurso {

}
