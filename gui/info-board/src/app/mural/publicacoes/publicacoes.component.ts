import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Publicacao } from '../../model/publicacao';
import { PublicacaoService } from './publicacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {
   constructor(private publicacaoService: PublicacaoService) {}

   publicacao: Publicacao = new Publicacao();
   publicacoes: Publicacao[];

   criarAluno(a: Publicacao): void {
     this.publicacaoService.criar(a)
        .then(ab => {
              this.publicacoes.push(ab);
              this.publicacao = new Publicacao();
        })
        .catch(erro => alert(erro));
   }

   ngOnInit(): void {
     this.publicacaoService.getPublicacoes()
         .then(as => this.publicacoes = as)
         .catch(erro => alert(erro));
   }

}