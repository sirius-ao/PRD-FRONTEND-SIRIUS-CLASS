import { Component } from "@angular/core";
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { SimpleCardComponent } from "../../../shared/components/simple-card/simple-card.component";
import { DataTablesModule } from "angular-datatables"

@Component({
    selector: 'app-alunos-lista',
    templateUrl: 'alunos.lista.html',
    styleUrl: 'alunos.lista.scss',
    imports: [HeaderIndicatorPageComponent, DataTablesModule ]
})

export class AlunosLista {
    dtOptions = {};

    ngOnInit(): void {
        this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25,
        processing: true,
        searching: false,
        lengthChange: false,
        data: [
            ['Jemilson', 'Domingos', '123456789LA098', '10/01/2001', 'Masculino', 'aluno1@gmail.com', '921 000 001', 'Programação Web', 'Black Freeday', '8h às 10h', 'AB12'],
            ['Maria', 'Silva', '234567890LB123', '22/02/2002', 'Feminino', 'aluno2@gmail.com', '921 000 002', 'Programação Mobile', 'Demo Day', '12 às 14h', 'AB13'],
            ['Carlos', 'Souza', '345678901LC234', '15/03/2003', 'Masculino', 'aluno3@gmail.com', '921 000 003', 'CCNA 1', 'Black Freeday', '16 às 18h', 'AB14'],
            ['Ana', 'Costa', '456789012LD345', '30/04/2001', 'Feminino', 'aluno4@gmail.com', '921 000 004', 'CCNA 2', 'Demo Day', '8h às 10h', 'AB15'],
            ['Paulo', 'Lima', '567890123LE456', '12/05/2000', 'Masculino', 'aluno5@gmail.com', '921 000 005', 'Programação Web', 'Black Freeday', '12 às 14h', 'AB12'],
            ['Fernanda', 'Martins', '678901234LF567', '08/06/2002', 'Feminino', 'aluno6@gmail.com', '921 000 006', 'Programação Mobile', 'Demo Day', '16 às 18h', 'AB13'],
            ['Lucas', 'Melo', '112345678LK012', '02/11/2002', 'Masculino', 'aluno11@gmail.com', '921 000 011', 'CCNA 1', 'Black Freeday', '12 às 14h', 'AB14'],
        ],
        columns: [
            { title: 'Nome' },
            { title: 'Sobrenome' },
            { title: 'BI' },
            { title: 'Nascimento' },
            { title: 'Gênero' },
            { title: 'Email' },
            { title: 'Telefone' },
            { title: 'Curso' },
            { title: 'Edição' },
            { title: 'Período' },
            { title: 'Turma' },
        ]
        };
    }
}