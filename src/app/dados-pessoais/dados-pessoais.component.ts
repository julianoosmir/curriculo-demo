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
    const DadosPessoais = new DadosPessoa(this.nome, this.telefone, this.whatsapp,
      this.site, this.email, this.endereco, this.dataDeNascimento);
    localStorage.setItem("DadosPessoais", JSON.stringify(DadosPessoais));

  }

  prosseguir() {
    this.salvarDadosPessoais();
    this.router.navigate(['/formacao']);
  }

}
