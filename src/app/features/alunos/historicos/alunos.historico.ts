import { Component } from "@angular/core";
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { DataTablesModule } from "angular-datatables";

@Component({
    selector: "alunos-historico-screen",
    templateUrl: "./alunos.historico.html",
    styleUrl: "./alunos.historico.scss",
    imports: [HeaderIndicatorPageComponent, DataTablesModule]
})

export class AlunosHistorico {
     dtOptions = {};

    ngOnInit(): void {
        this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25,
        processing: true,
        searching: false,
        lengthChange: false,
        info: false,
        paging:false,
        data: [
            ['Programação Web', '60h', '17', '95%', 'Aprovado'],
            ['Banco de Dados', '50h', '15', '92%', 'Aprovado'],
            ['Redes de computador', '40h', '10', '88%', 'Reprovado'],
        ],
        columns: [
            { title: 'Disciplina' },
            { title: 'Carga Horária' },
            { title: 'Nota Final' },
            { title: 'Frequência' },
            { title: 'Situações' },
        ]
        };
    }
}