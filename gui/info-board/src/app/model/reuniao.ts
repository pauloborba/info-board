export class Reuniao {
    titulo: string; // título da reunião
    data: Date; // data da reunião
    pauta: string; // pauta da reunião
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.titulo = '';
      this.data = new Date();
      this.pauta = '';
    }
  
    clone(): Reuniao {
      var reuniao: Reuniao = new Reuniao();
      reuniao.copyFrom(this);
      return reuniao;
    }
  
    copyFrom(from: Reuniao): void {
      this.titulo = from.titulo;
      this.data = from.data;
      this.pauta = from.pauta;
    }

    getTitle(): string {
      return this.titulo;
    }

    getDate(): Date {
      return this.data;
    }

    getTopic(): string {
      return this.pauta;
    }
  }