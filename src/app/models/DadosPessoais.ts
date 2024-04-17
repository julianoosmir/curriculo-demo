export class DadosPessoa {
  nome:string;
  telefone: string;
  whatsapp :string;
  site: string;
  email: string;
  endereco: string;
  dataDeNascimento: Date;

  constructor(nome: string, telefone: string, whatsapp: string, site: string, email: string, endereco: string, dataDeNascimento: Date) {
    this.nome = nome;
    this.telefone = telefone;
    this.whatsapp = whatsapp;
    this.site = site;
    this.email = email;
    this.endereco = endereco;
    this.dataDeNascimento = dataDeNascimento;
  }
}
