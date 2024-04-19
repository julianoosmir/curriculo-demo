export class Experiencia{
  cargo:string;
  empresa:string;
  dataInicio: string;
  dataFim: string | null;
  descricao:string;
  ferramentas : string;

    constructor(cargo: string, empresa: string, dataInicio: Date, dataFim: string, descricao: string, ferramentas: string) {
    this.cargo = cargo;
    this.empresa = empresa;
    this.dataInicio = dataInicio.toLocaleDateString("pt-br");
    this.dataFim = dataFim;
    this.descricao = descricao;
    this.ferramentas = ferramentas;
  }
}
