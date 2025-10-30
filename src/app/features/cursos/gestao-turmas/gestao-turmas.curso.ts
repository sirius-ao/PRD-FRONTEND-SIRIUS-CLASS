import { Component } from '@angular/core';
import { HeaderIndicatorPageComponent } from "../../../shared/components/header-indicator-page/header-indicator-page.component";
import { AlunosType } from '../../../types/alunos.types';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestao-turmas.curso',
  imports: [HeaderIndicatorPageComponent,  CommonModule, DataTablesModule],
  templateUrl: './gestao-turmas.curso.html',
  styleUrl: './gestao-turmas.curso.scss'
})
export class GestaoTurmasCurso {
  buscaAgrupadaInput = false;
  dtOptions = {};

  allAlunos:AlunosType [] =  [
    {id: "a", name: "Jemilson Domingos", bi: "123456789LA098", dataNasc: '10/01/2001', genero: 'Masculino', email: 'aluno1@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Pendente'},
    {id: "b", name: "Ana Costa", bi: "456789012LD345", dataNasc: '30/04/2001', genero: 'Feminino', email: 'aluno21@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Activo'},
    {id: "b", name: "Paulo Lima", bi: "567890123LE456", dataNasc: '12/05/2000', genero: 'Feminino', email: 'alu44@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Activo'},
    {id: "b", name: "Fernanda Martins", bi: "678901234LF567", dataNasc: '08/06/2002', genero: 'Feminino', email: 'alu44@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Inactivo'},
    {id: "b", name: "Fernanda Martins", bi: "678901234LF567", dataNasc: '08/06/2002', genero: 'Feminino', email: 'alu44@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Inactivo'},
    {id: "b", name: "Fernanda Martins", bi: "678901234LF567", dataNasc: '08/06/2002', genero: 'Feminino', email: 'alu44@gmail.com', telephone: '921000000', curso: 'CCNA', edicao: 'Black Freeday', periodo: '8h à 10h', turma: 'AB12', estado: 'Inactivo'},
  ];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      searching: true,
      lengthChange: false,    
    };
  }

}
