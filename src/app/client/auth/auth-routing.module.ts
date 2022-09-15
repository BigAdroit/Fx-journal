import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetCodeComponent } from './component/reset-code/reset-code.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path: 'change-password', component : ChangePasswordComponent},
  {path: 'reset', component: ResetCodeComponent},
  {path: 'registration', component : RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
