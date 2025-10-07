import { Component } from "@angular/core";
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideCamera } from "@ng-icons/lucide";
import { RouterLink } from "@angular/router";

export const maskConfig = {
  validation: true,
    patterns: {
        '0': { pattern: /\d/ }, 
        'A': { pattern: /[A-Za-z]/, transform: (char:string) => char.toUpperCase() },
  }
};

@Component({
    selector: 'app-alunos-filtros',
    templateUrl: 'alunos.filtros.html',
    styleUrl: 'alunos.filtros.scss',
    imports: [NgxMaskDirective, HeaderIndicatorPageComponent, RouterLink],
    providers: [
        provideNgxMask(maskConfig),
        provideIcons({ lucideCamera })
    ]

})

export class AlunosFiltros {}