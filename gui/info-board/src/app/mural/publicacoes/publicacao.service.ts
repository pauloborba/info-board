import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Publicacao } from '../../model/publicacao';

@Injectable()
export class PublicacaoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:5000';

  constructor(private http: Http) { }

  criar(publicacao: Publicacao): Promise<Publicacao> {
    return this.http.post(this.taURL + "/publicacao",JSON.stringify(publicacao), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return publicacao;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(publicacao: Publicacao): Promise<Publicacao> {
    return this.http.put(this.taURL + "/publicacao",JSON.stringify(publicacao), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return publicacao;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getPublicacoes(): Promise<Publicacao[]> {
    return this.http.get(this.taURL + "/publicacoes")
             .toPromise()
             .then(res => res.json() as Publicacao[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de publicações',erro);
    return Promise.reject(erro.message || erro);
  }
}