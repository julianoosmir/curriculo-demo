import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {DadosPessoa} from "../models/DadosPessoais";

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.css'
})
export class DadosPessoaisComponent {
  msg = '';
  nome = '';
  telefone = '';
  whatsapp = '';
  site = '';
  email = '';
  endereco = '';
  dataDeNascimento: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }

  salvarDadosPessoais() {
    const DadosPessoais :DadosPessoa = {
      nome: this.nome,
      telefone: this.telefone,
      whatsapp: this.whatsapp,
      site: this.site,
      email: this.email,
      endereco: this.endereco,
      dataDeNascimento: this.dataDeNascimento.toLocaleDateString("pt-br"),
    }
    localStorage.setItem("DadosPessoais", JSON.stringify(DadosPessoais));

  }

  prosseguir() {
    this.salvarDadosPessoais();
    this.router.navigate(['/formacao']);
  }

}
