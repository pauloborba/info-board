import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NotificationService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private infoboardUrl = 'http://localhost:5000';

    constructor(private http: Http) { }


    private errorHandler(error: Error): Promise<any> {
        console.log('Acesso mal sucedido ao serviço de notifcações', error);
        return Promise.reject(error.message || error);
    }
}
