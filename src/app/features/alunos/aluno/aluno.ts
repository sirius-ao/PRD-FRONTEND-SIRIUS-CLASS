import { Component } from "@angular/core";
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'aluno-screen',
    templateUrl: './aluno.html',
    styleUrl: './aluno.scss',
    imports: [HeaderIndicatorPageComponent, CommonModule]
})

export class AlunoScreen {
    protected stepIndex: number = 0;

    protected nextStep(indice:number) {
        this.stepIndex = indice;
    }

    protected previewStep() {
        this.stepIndex -= 1;
    }
}