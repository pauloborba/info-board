import { Component, OnInit } from '@angular/core';

import { Publicacao } from '../../model/publicacao';

@Component({
  selector: 'app-root',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {
   constructor() {}

   publicacao: Publicacao = new Publicacao();
   publicacoes: Publicacao[];

   criarAluno(a: Publicacao): void {
     
   }

   ngOnInit(): void {
     //TODO inicializar array publicacoes
   }

}