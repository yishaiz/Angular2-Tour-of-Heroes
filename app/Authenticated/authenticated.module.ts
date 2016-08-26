import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { AuthenticatedComponent} from "./authenticated.component";

import { authenticatedRouting} from './authenticated.routing';
import {AuthGuard} from "../auth-guard.service";

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
    AuthGuard
  ]
})
export class AuthenticatedModule {

}
