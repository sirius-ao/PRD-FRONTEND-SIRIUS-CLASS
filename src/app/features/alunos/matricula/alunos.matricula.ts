import { Component } from "@angular/core";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { provideIcons } from "@ng-icons/core";
import { lucideCamera } from "@ng-icons/lucide";
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";

export const maskConfig = {
  validation: true,
    patterns: {
      '0': { pattern: /\d/ }, 
      'A': { pattern: /[A-Za-z]/, transform: (char:string) => char.toUpperCase() },
  }
};

@Component({
    selector: 'app-alunos-matricula',
    templateUrl: 'alunos.matricula.html',
    styleUrl: 'alunos.matricula.scss',
    imports: [NgxMaskDirective, HeaderIndicatorPageComponent],
    providers: [
        provideNgxMask(maskConfig),
        provideIcons({ lucideCamera })
    ]

})
export class AlunosMatricula { }