import { Component } from '@angular/core';

@Component({
    selector:  'app-binding',
    templateUrl: './../assignment-two-way-data-binding/twoWayDataBinding.component.html',
    styleUrls: ['./../assignment-two-way-data-binding/twoWayDataBinding.component.css']
})
export class TwoWayBindingComponent {
      username = '';

      resetUserName() {
        this.username = '';
      }
}
