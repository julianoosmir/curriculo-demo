import {Component, ElementRef, OnInit} from '@angular/core';
import {DadosPessoa} from "../models/DadosPessoais";
import {Experiencia} from "../models/Experiencia";
import {Formacao} from "../models/Formacao";

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent implements OnInit {

  foto: any;
  imageurl: any;
  dadosPessoais: DadosPessoa | undefined;
  esperiencias : Experiencia[] = [];
  formacoes: Formacao[] = [];


  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(){
   this.setValor();
  }

  setValor(){

    const dados = localStorage.getItem("DadosPessoais");
    this.dadosPessoais = null !== dados ? JSON.parse(dados) : null;

    const forma = localStorage.getItem("formacoes");
    this.formacoes = null !== forma ? JSON.parse(forma) : [];

    const exp = localStorage.getItem("experiencia");
    this.esperiencias = null !== exp? JSON.parse(exp) : [];
    console.log(this.esperiencias)
  }

  onFileSelected(event: any) {
    console.log(event)
    const file:File = event.target.files[0];
    file.arrayBuffer().then(b=> {
      let base64String = this.arrayBufferToBase64(b);
      this.imageurl = "data:image/jpg;base64," + base64String;
    })
  };



  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }



  alterar() {
    const len = (this.esperiencias.length/3);
    const page = 1080;
    return (page * len) + "px";
  }


}
