import { Component, OnInit, Injectable } from '@angular/core';
import { INetworking } from '../networking/networking.service.interface';

@Injectable()
@Component({
    selector: 'app-navigationbar',
    templateUrl: './navigationbar.component.html',
    styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
    title = 'Infoboard';

    ngOnInit(): void { }
}

