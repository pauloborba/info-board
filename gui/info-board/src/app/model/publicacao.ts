import { Reuniao } from './reuniao';

export class Publicacao {
    titulo: string; //nome do post
    evento: Reuniao; //reuniao a que se refere
    mensagem: string; //mensagem da publicacao
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.titulo = "";
      this.evento = null;
      this.mensagem = "";
    }
  
    clone(): Publicacao {
      var publicacao: Publicacao = new Publicacao();
      publicacao.copyFrom(this);
      return publicacao;
    }
  
    copyFrom(from: Publicacao): void {
      this.titulo = from.titulo;
      this.evento = from.evento;
      this.mensagem = from.mensagem;
    }

    getEvent(): Reuniao {
      return this.evento;
    }
  }