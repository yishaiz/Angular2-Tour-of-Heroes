import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { AdminComponent} from "./admin.component";

import { adminRouting} from './admin.routing';
import {AuthGuard} from "../auth-guard.service";
import {AuthService} from "../auth.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    adminRouting
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AdminModule {

}
