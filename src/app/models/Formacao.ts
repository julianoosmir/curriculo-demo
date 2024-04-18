export class Formacao {
  instituicao: string;
  curso: string;
  grau: string;
  dataDeInicio: Date;
  dataDeTermino: Date;

  constructor(instituicao: string, curso: string, grau: string, dataDeInicio: Date, dataDeTermino: Date) {
    this.instituicao = instituicao;
    this.curso = curso;
    this.grau = grau;
    this.dataDeInicio = dataDeInicio;
    this.dataDeTermino = dataDeTermino;
  }
}
