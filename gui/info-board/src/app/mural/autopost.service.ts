import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Publicacao } from '../model/publicacao';

@Injectable()
export class AutopostService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de autopost',erro);
    return Promise.reject(erro.message || erro);
  }
}