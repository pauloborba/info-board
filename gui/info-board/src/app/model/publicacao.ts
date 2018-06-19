const postType = {
    NO_EVENT: 'no_event',
    DATA_REUNIAO: 'data_reuniao',
    PAUTA_REUNIAO: 'pauta_reuniao',
}

export class Publicacao {
    titulo: string; //nome do post
    tipo: string; //postType.DATA_REUNIAO, postType.PAUTA_REUNIAO, postType.NO_EVENT
    evento: string; //nome ou id da reuniao a que se refere, null caso seja no_event 
    corpo: string; //mensagem da publicacao
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.titulo = "";
      this.tipo = postType.NO_EVENT;
      this.evento = null;
      this.corpo = "";
    }
  
    clone(): Publicacao {
      var publicacao: Publicacao = new Publicacao();
      publicacao.copyFrom(this);
      return publicacao;
    }
  
    copyFrom(from: Publicacao): void {
      this.titulo = from.titulo;
      this.tipo = from.tipo;
      this.evento = from.evento;
      this.corpo = from.corpo;
    }

  }