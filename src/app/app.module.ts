import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';

// import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorInterceptor } from './service/interceptor/interceptor.interceptor';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ChartModule, 
    RangeNavigatorModule, 
    StockChartAllModule, 
    ChartAllModule, FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    
    MatSnackBarModule,
    
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
