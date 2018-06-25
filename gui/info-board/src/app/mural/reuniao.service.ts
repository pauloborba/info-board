import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Reuniao } from '../model/reuniao';

@Injectable()
export class ReuniaoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:5000';

  constructor(private http: Http) { }

  criar(reuniao: Reuniao): Promise<Reuniao> {
    return this.http.post(this.taURL + "/reuniao",JSON.stringify(reuniao), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return reuniao;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(reuniao: Reuniao): Promise<Reuniao> {
    return this.http.put(this.taURL + "/reuniao",JSON.stringify(reuniao), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return reuniao;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getReunioes(): Promise<Reuniao[]> {
    return this.http.get(this.taURL + "/reunioes")
             .toPromise()
             .then(res => res.json() as Reuniao[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de reuniões',erro);
    return Promise.reject(erro.message || erro);
  }
}