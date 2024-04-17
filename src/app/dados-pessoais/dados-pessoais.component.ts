import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {DadosPessoa} from "../models/DadosPessoais";

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.css'
})
export class DadosPessoaisComponent {
  msg = '';
  nome? = '';
  telefone  = '';
  whatsapp  = '';
  site: string | undefined;
  email: string | undefined;
  endereco: string | undefined;
  dataDeNascimento: Date | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {

  }

  salvarDadosPessoais() {
    this.msg = '';

  }

  prosseguir(){
    this.router.navigate(['/formacao']);
  }

}
