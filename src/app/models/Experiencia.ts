export class Experiencia{
  cargo:string;
  empresa:string;
  dataInicio:Date;
  dataFim:Date;
  descricao:string;
  ferramentas : string;

  constructor(cargo: string, empresa: string, dataInicio: Date, dataFim: Date, descricao: string, ferramentas: string) {
    this.cargo = cargo;
    this.empresa = empresa;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.descricao = descricao;
    this.ferramentas = ferramentas;
  }
}
