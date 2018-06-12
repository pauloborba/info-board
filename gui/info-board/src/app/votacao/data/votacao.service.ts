import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Aluno } from '../../model/usuario';
import { Aluno } from '../../model/reuniao';

@Injectable()
export class VotacaoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private taURL = 'http://localhost:3000';

    constructor(private http: Http) { }

    votar(usuario: Usuario, reuniao: Reuniao, data : String): Promise<boolean> {
        return this.http.post(this.taURL + "/votar_data", JSON.stringify(usuario), JSON.stringify(reuniao), JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(res => {
                if (res.json().success(){ return true; } else { return null; })
            .catch(this.trataErro);
    }

    private tratarErro(erro: any): Promise < any > {
        console.error('Acesso mal sucedido ao serviço de votação de data', erro);
        return Promise.reject(erro.message || erro);
    }
}