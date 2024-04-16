import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css'
})
export class FormacaoComponent implements OnInit {

  formacaoList? = ['Nível de formação','Ensino fundamental',
                  'Ensino médio','Ensino superior','Pós-graduação',
                  'Mestrado','Doutorado','Pós-doutorado'];
  formacao? = '';
  nomeCurso? = '';
  nomeInstitucao? = '';
  dataDeInicio: any | undefined;
  dataDeTermino: any | undefined;


  constructor(
    private router: Router) {

    }

  ngOnInit() {
    this.formacaoList = ['Nível de formação','Ensino fundamental',
    'Ensino médio','Ensino superior','Pós-graduação',
    'Mestrado','Doutorado','Pós-doutorado'];
  }
  salvar(){
    this.router.navigate(['/experiencia']);
  }
}
