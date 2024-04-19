import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Formacao} from "../models/Formacao";
import {Experiencia} from "../models/Experiencia";

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent implements OnInit {

  formacaoList? = ['Nível de formação','Ensino fundamental',
                  'Ensino médio','Ensino superior','Pós-graduação',
                  'Mestrado','Doutorado','Pós-doutorado'];
  grau = '';
  nomeCurso = '';
  nomeInstitucao = '';
  dataDeInicio: any | undefined;
  dataDeTermino: any | undefined;

  formacoes: Formacao[] = [];

  constructor(
    private router: Router) {

    }

  ngOnInit() {
    this.formacaoList = ['Nível de formação','Ensino fundamental',
    'Ensino médio','Ensino superior','Pós-graduação',
    'Mestrado','Doutorado','Pós-doutorado'];
  }

  inserir() {
    const formacao = new Formacao(
      this.nomeInstitucao,
      this.nomeCurso,
      this.grau,
      this.dataDeInicio,
      this.dataDeTermino)

    this.formacoes.push(formacao);
  }
  salvar(){
    localStorage.setItem("formacoes", JSON.stringify(this.formacoes));
    this.router.navigate(['/experiencia']);
  }

  remover(item: Formacao) {
    this.formacoes = this.formacoes.filter(f=>f !== item);
  }
}
