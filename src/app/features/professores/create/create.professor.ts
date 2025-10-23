import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

export const maskConfig = {
  validation: true,
    patterns: {
      '0': { pattern: /\d/ }, 
      'A': { pattern: /[A-Za-z]/, transform: (char:string) => char.toUpperCase() },
  }
};

@Component({
  selector: 'app-create.professor',
  imports: [NgxMaskDirective, HeaderIndicatorPageComponent],
  providers: [ provideNgxMask(maskConfig) ],
  templateUrl: './create.professor.html',
  styleUrl: './create.professor.scss'
})

export class CreateProfessor {

}
