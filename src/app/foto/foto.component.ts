import {Component, ElementRef, OnInit} from '@angular/core';
import {DadosPessoa} from "../models/DadosPessoais";
import {Experiencia} from "../models/Experiencia";
import {Formacao} from "../models/Formacao";
// @ts-ignore
import data from "../../assets/data.json";
import {Apresentacao} from "../models/Apresentacao";
import {Qualificacoes} from "../models/qualificacoes";

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent implements OnInit {

  foto: any;
  imageurl: any;
  dadosPessoais: DadosPessoa | undefined;
  apresentacao: Apresentacao | undefined;
  esperiencias: Experiencia[] = [];
  formacoes: Formacao[] = []
  qualificacoes: Qualificacoes[]=[]


  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.setValor();
    this.getDados();
  }


  setValor() {

    const dados = localStorage.getItem("DadosPessoais");
    this.dadosPessoais = null !== dados ? JSON.parse(dados) : null;

    const forma = localStorage.getItem("formacoes");
    this.formacoes = null !== forma ? JSON.parse(forma) : [];

    const exp = localStorage.getItem("experiencia");
    this.esperiencias = null !== exp ? JSON.parse(exp) : [];

  }

  getDados() {
    if(!this.apresentacao){
      this.formacoes = data.formacoes;
      this.apresentacao = data.apresentacao;
      this.esperiencias = data.experiencia;
      this.dadosPessoais = data.dadosPessoais;
      this.qualificacoes = data.qualificacoes;
    }
    console.log(data);
  }

  onFileSelected(event: any) {
    console.log(event)
    const file: File = event.target.files[0];
    file.arrayBuffer().then(b => {
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
    const len = this.apresentacao ?  (this.esperiencias.length / 3) + 1 : (this.esperiencias.length / 3) ;
    const page = 1080;
    return (page * len) + "px";
  }


}
