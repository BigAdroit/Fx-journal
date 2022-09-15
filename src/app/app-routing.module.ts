import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './service/guard/authguard.guard';

const routes: Routes = [
  {path: '', loadChildren:()=> import('./client/client.module').then(m=> m.ClientModule)},
  { path: 'client-dashboard', canActivate : [AuthguardGuard] , loadChildren: () => import('./client-dashboard/client-dashboard.module').then(m => m.ClientDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
