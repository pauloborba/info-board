export class Publicacao {
    titulo: string; //nome do post
    evento: string; //nome ou id da reuniao a que se refere, null caso seja no_event 
    data_evento: Date; //data da reunião associada
    pauta_evento: string; //pauta da reunião associada
    corpo: string; //mensagem da publicacao
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.titulo = "";
      this.evento = null;
      this.data_evento = null;
      this.pauta_evento = null;
      this.corpo = "";
    }
  
    clone(): Publicacao {
      var publicacao: Publicacao = new Publicacao();
      publicacao.copyFrom(this);
      return publicacao;
    }
  
    copyFrom(from: Publicacao): void {
      this.titulo = from.titulo;
      this.evento = from.evento;
      this.corpo = from.corpo;
    }

    getEventDate(): Date {
      return this.data_evento;
    }

    getEventTopic(): string {
      return this.pauta_evento;
    }
  }