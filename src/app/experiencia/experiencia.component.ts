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
  dataDeTermino: Date | null = null;

  experiencias: Experiencia[] = [];

  constructor(
    private router: Router) {

  }

  salvar() {
    localStorage.setItem("experiencia", JSON.stringify(this.experiencias));
    this.router.navigate(['/foto']);
  }

  inserir() {
    const experiencia = new Experiencia(
      this.cargo,
      this.nomeEmpresa,
      this.dataDeInicio,
      this.ntDataTermino(),
      this.descricao,
      this.ferramentas)

    this.experiencias.push(experiencia);
  }

  ntDataTermino(): string {
    return this.dataDeTermino !== null ? this.dataDeTermino.toLocaleDateString('pt-BR') : "";
  }

  remover(item: Experiencia) {
    this.experiencias = this.experiencias.filter(e=>e !== item);
  }
}
