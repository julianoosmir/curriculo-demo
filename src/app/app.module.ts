import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormacaoComponent } from './formacao/formacao.component';
import { DropdownModule } from 'primeng/dropdown';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FotoComponent } from './foto/foto.component';
import { ImageModule } from 'primeng/image';
import {NgxPrintModule} from 'ngx-print';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import {SharedModule} from "./shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    FormacaoComponent,
    ExperienciaComponent,
    FotoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    CheckboxModule,
    ImageModule,
    InputTextareaModule,
    AccordionModule,
    InputMaskModule,
    SharedModule,
    NgxPrintModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
