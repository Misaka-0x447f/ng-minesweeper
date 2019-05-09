import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {NgRoutingModule} from "./ng-routing.module";
import {NgComponent} from "./ng.component";
import {SquareComponent} from "./square/square.component";
import {FaComponent} from "./fa/fa.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NgComponent,
    SquareComponent,
    FaComponent
  ],
  imports: [
    BrowserModule,
    NgRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [NgComponent]
})

export class Module {
}
