import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { EventComponent } from './event/event.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { ReadNewsComponent } from './read-news/read-news.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatwWatchlistComponent } from './creatw-watchlist/creatw-watchlist.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    HomeComponent,
    JournalComponent,
    SettingsComponent,
    CalendarComponent,
    WatchlistComponent,
    AnalysisComponent,
    EventComponent,
    ProfileComponent,
    ViewJournalComponent,
    ReadNewsComponent,
    CreateJournalComponent,
    CreatwWatchlistComponent
  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class ClientDashboardModule { }
