import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ReadNewsComponent } from './pages/read-news/read-news.component';
import { ClaculatorsComponent } from './pages/claculators/claculators.component';
import { EducationComponent } from './pages/education/education.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NewsComponent,
    ReadNewsComponent,
    ClaculatorsComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ClientModule { }
