import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts';



import { FooterComponent } from './component/footer/footer.component';
import { ClientHeaderComponent } from './component/client-header/client-header.component';
import { BaseButtonComponent } from './ui/base-button/base-button.component';
import { BaseInputTextFieldComponent } from './ui/base-input-text-field/base-input-text-field.component';
import { BaseInputFileFieldComponent } from './ui/base-input-file-field/base-input-file-field.component';
import { BaseInputPasswordFieldComponent } from './ui/base-input-password-field/base-input-password-field.component';
import { BaseInputTextareaComponent } from './ui/base-input-textarea/base-input-textarea.component';
import { HeroComponent } from './component/hero/hero.component';
import { ForexBasicsComponent } from './component/education/forex-basics/forex-basics.component';
import { LeverageComponent } from './component/education/leverage/leverage.component';
import { PipsComponent } from './component/education/pips/pips.component';
import { CandlestickComponent } from './component/education/candlestick/candlestick.component';
import { CandlestickMasteringComponent } from './component/education/candlestick-mastering/candlestick-mastering.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { UserSidenavComponent } from './component/user-sidenav/user-sidenav.component';
import { AdminHeadBannerComponent } from './component/admin-head-banner/admin-head-banner.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { ForexComponent } from './component/forex/forex.component';
import { EditNameComponent } from './ui/edit-name/edit-name.component';
import { ConfirmationComponent } from './ui/confirmation/confirmation.component';
import { ViewMonthlyAnalysisBarChartComponent } from './component/view-monthly-analysis-bar-chart/view-monthly-analysis-bar-chart.component';
import { PLMonthlyAnalysisComponent } from './ui/p-l-monthly-analysis/p-l-monthly-analysis.component';
import { EquityMontlyAnalysisComponent } from './ui/equity-montly-analysis/equity-montly-analysis.component';
import { MonthlyCurrencyPerformanceComponent } from './ui/monthly-currency-performance/monthly-currency-performance.component';
import { MonthlyStrategyPerformamceComponent } from './ui/monthly-strategy-performamce/monthly-strategy-performamce.component';
import { LongShortMonthlyPerformanceComponent } from './ui/long-short-monthly-performance/long-short-monthly-performance.component';
import { TradingSessionMonthlyAnalysisComponent } from './ui/trading-session-monthly-analysis/trading-session-monthly-analysis.component';
import { NoDataComponent } from './ui/no-data/no-data.component';
import { TimeframeMonthlyPerformanceComponent } from './ui/timeframe-monthly-performance/timeframe-monthly-performance.component';
import { EditDobComponent } from './ui/edit-dob/edit-dob.component';
import { EditPhoneComponent } from './ui/edit-phone/edit-phone.component';
import { EditAddressComponent } from './ui/edit-address/edit-address.component';
import { UploadComponent } from './ui/upload/upload.component';
import { LongShortAnalysisComponent } from './component/long-short-analysis/long-short-analysis.component';
import { EquityAnalysisComponent } from './component/equity-analysis/equity-analysis.component';
import { StrategyPerformanceComponent } from './component/strategy-performance/strategy-performance.component';
import { TradePerCurrencyComponent } from './component/trade-per-currency/trade-per-currency.component';
import { TradingSessionComponent } from './component/trading-session/trading-session.component';



@NgModule({
  declarations: [
    FooterComponent,
    ClientHeaderComponent,
    BaseButtonComponent,
    BaseInputTextFieldComponent,
    BaseInputFileFieldComponent,
    BaseInputPasswordFieldComponent,
    BaseInputTextareaComponent,
    HeroComponent,
    ForexBasicsComponent,
    LeverageComponent,
    PipsComponent,
    CandlestickComponent,
    CandlestickMasteringComponent,
    LoginComponent,
    RegistrationComponent,
    UserSidenavComponent,
    AdminHeadBannerComponent,
    LineChartComponent,
    BarChartComponent,
    LoaderComponent,
    ForexComponent,
    EditNameComponent,
    ConfirmationComponent,
    ViewMonthlyAnalysisBarChartComponent,
    PLMonthlyAnalysisComponent,
    EquityMontlyAnalysisComponent,
    MonthlyCurrencyPerformanceComponent,
    MonthlyStrategyPerformamceComponent,
    LongShortMonthlyPerformanceComponent,
    TradingSessionMonthlyAnalysisComponent,
    NoDataComponent,
    TimeframeMonthlyPerformanceComponent,
    EditDobComponent,
    EditPhoneComponent,
    EditAddressComponent,
    UploadComponent,
    LongShortAnalysisComponent,
    EquityAnalysisComponent,
    StrategyPerformanceComponent,
    TradePerCurrencyComponent,
    TradingSessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule
  ],
  exports: [
    FooterComponent,
    BaseButtonComponent,
    ClientHeaderComponent,
    HeroComponent,
    ForexBasicsComponent,
    LeverageComponent,
    PipsComponent,
    CandlestickComponent,
    CandlestickMasteringComponent,
    UserSidenavComponent,
    AdminHeadBannerComponent,
    LineChartComponent,
    BarChartComponent,
    LoaderComponent,
    ViewMonthlyAnalysisBarChartComponent,
    PLMonthlyAnalysisComponent,
    EquityMontlyAnalysisComponent,
    MonthlyCurrencyPerformanceComponent,
    MonthlyStrategyPerformamceComponent,
    LongShortMonthlyPerformanceComponent,
    TradingSessionMonthlyAnalysisComponent,
    NoDataComponent,
    TimeframeMonthlyPerformanceComponent,
    StrategyPerformanceComponent,
    TradingSessionComponent,
    LongShortAnalysisComponent,
    TradePerCurrencyComponent,
  ]
})
export class SharedModule { }
