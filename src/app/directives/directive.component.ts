import { Component } from '@angular/core';

@Component({
    selector:  'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    isClicked = false;


    btnClicked() {
        this.isClicked = ! this.isClicked;
    }
}
