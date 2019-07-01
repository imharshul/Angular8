import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './assignment/success/success.component';
import { WarningComponent } from './assignment/warning/warning.component';
import { TwoWayBindingComponent } from './assignment-two-way-data-binding/twoWayDataBinding.component';
import {DirectiveComponent} from './directives/directive.component';
import {AssignmentDirectiveComponent} from './assignment-directives/assignment-directives.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    AssignmentDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
