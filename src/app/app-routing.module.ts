import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FotoComponent } from './foto/foto.component';

const routes: Routes = [
  { path: '', component: DadosPessoaisComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'foto', component: FotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
