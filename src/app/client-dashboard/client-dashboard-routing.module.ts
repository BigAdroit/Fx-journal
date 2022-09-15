import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientDashboardComponent } from './client-dashboard.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';
import { CreatwWatchlistComponent } from './creatw-watchlist/creatw-watchlist.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewJournalComponent } from './view-journal/view-journal.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: ClientDashboardComponent, 
  children: [
    { path: '', component: HomeComponent},
    { path:'journal', component:JournalComponent},
    { path:'settings', component:SettingsComponent},
    { path:'watchlist', component:WatchlistComponent},
    { path:'event', component: EventComponent},
    { path: 'calendar', component: CalendarComponent},
    { path: 'analysis', component: AnalysisComponent},
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'create-watchlist', component : CreatwWatchlistComponent},
    { path: 'view-journal/:id', component: ViewJournalComponent},
    { path: 'create-journal', component : CreateJournalComponent}

    
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDashboardRoutingModule { }
