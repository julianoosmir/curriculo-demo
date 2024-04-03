import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  cargo? = '';
  nomeEmpresa? = '';
  trabalhoAqui  : any| boolean;
  dataDeInicio: any | undefined;
  dataDeTermino: any | undefined;

  constructor(
    private router: Router) {

    }
  salvar(){
    this.router.navigate(['/foto']);
  }

}
