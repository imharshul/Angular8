import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    componentName: string = 'Server Component';
    // tslint:disable-next-line:no-inferrable-types
    buttonEnabled: boolean = false;

    getComponentName() {
        return this.componentName;
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    // tslint:disable-next-line:no-inferrable-types
    constructor() {
         setTimeout( () => {
                                 this.buttonEnabled = true;
                             },
                       3000);
    }
}


