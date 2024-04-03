import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.css'
})
export class DadosPessoaisComponent {
  msg = '';
  nome? = '';
  telefone  = '';
  site: string | undefined;
  email: string | undefined;
  dataDeNascimento: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

    }

  salvar(){
    this.router.navigate(['/formacao']);
  }

}
