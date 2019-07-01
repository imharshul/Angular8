import { Component } from '@angular/core';

@Component({
    selector: 'app-directive-assignment',
    templateUrl:  './assignment-directives.component.html',
    styleUrls:  ['./assignment-directives.component.css']
})
export class AssignmentDirectiveComponent {
    isClicked = true;
    count = 3;
    arrBtnClicks = [{id: 1}, {id: 2}, {id: 3}];

    onButtonClick() {
        ++this.count;
        this.isClicked = !this.isClicked;
        this.arrBtnClicks.push({id: this.count});
        console.log(this.arrBtnClicks);
    }
}
