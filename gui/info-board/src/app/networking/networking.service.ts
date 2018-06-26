import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { INetworking } from './networking.service.interface';
import INotification from '../notification/notification.interface';

@Injectable()
export class NetworkingService implements INetworking {
    private headers = new Headers({'Content-Type': 'application/json'});
    private infoboardUrl = 'http://localhost:5000';

    constructor(private http: Http) { }

    getNotifications(): Promise<INotification[]> {
        return this.http.get(this.infoboardUrl + '/notifications')
            .toPromise()
            .then(res => res.json() as INotification[]);
    }
}
