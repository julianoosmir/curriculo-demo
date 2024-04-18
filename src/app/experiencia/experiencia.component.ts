import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Experiencia} from "../models/Experiencia";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  cargo = '';
  nomeEmpresa = '';
  descricao = '';
  ferramentas = '';
  trabalhoAqui = false;
  dataDeInicio: Date = new Date();
  dataDeTermino: Date = new Date();

  experiencias: Experiencia[] = [];

  constructor(
    private router: Router) {

  }

  salvar() {
    this.router.navigate(['/foto']);
  }

  inserir() {
    const experiencia = new Experiencia(
      this.cargo,
      this.nomeEmpresa,
      this.dataDeInicio,
      this.dataDeTermino,
      this.descricao,
      this.ferramentas)

    this.experiencias.push(experiencia);
  }
}
