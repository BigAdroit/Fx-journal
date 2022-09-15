import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ClaculatorsComponent } from './pages/claculators/claculators.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ReadNewsComponent } from './pages/read-news/read-news.component';

const routes: Routes = [ 
  {path: '', component : HomeComponent},
  {path: 'auth', loadChildren:()=> import('./auth/auth.module').then(m=> m.AuthModule)},
  {path: 'about', component : AboutComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'news', component : NewsComponent},
  {path: 'calculator', component : ClaculatorsComponent},
  {path: 'education', component : EducationComponent},
  {path: 'read-news', component: ReadNewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
