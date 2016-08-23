import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { AuthenticatedComponent} from "./authenticated.component";

import { authenticatedRouting} from './authenticated.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    authenticatedRouting
  ],
  declarations: [
    AuthenticatedComponent
  ],
  providers: [

  ]
})
export class AuthenticatedModule {

}