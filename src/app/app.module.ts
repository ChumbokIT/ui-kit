import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateHeadComponent} from './layout/app-layout/template-head/template-head.component';
import {TemplateTopnavComponent} from './layout/app-layout/template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './layout/app-layout/template-sidenav/template-sidenav.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {FlashMessageComponent} from './directives/flash-message/flash-message.component';
import {NgFlashMessagesModule} from 'ng-flash-messages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './guard/auth.guard';
import {FlashMessageService} from './service/flash-message.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http401Interceptor} from './interceptor/Http401Interceptor';
import {CreatePrescriptionComponent} from './componant/dentist-point/create-prescription/create-prescription.component';
import {CreatePatientComponent} from './componant/dentist-point/create-patient/create-patient.component';
import {CalendarComponent} from './componant/dentist-point/calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {AppointmentService} from './service/appointment.service';
import {PrescriptionService} from './service/prescription.service';
import {PrescriptionListComponent} from './componant/dentist-point/prescription-list/prescription-list.component';
import {PrescriptionViewComponent} from './componant/dentist-point/prescription-view/prescription-view.component';
import {CreateAppointmentComponent} from './componant/dentist-point/create-appointment/create-appointment.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {CreateTemplateComponent} from './componant/dentist-point/create-template/create-template.component';
import {TemplateService} from './service/template.service';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {environment} from '../environments/environment';
import {PingHttpService} from './service/ping-http.service';
import {PingMockService} from './service/ping-mock.service';
import {PingService} from './service/ping.service';
import {SettingsComponent} from './componant/dentist-point/settings/settings.component';
import {AppointmentHttpService} from './service/appointment-http.service';
import {AppointmentMockService} from './service/appointment-mock.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditTemplateComponent} from './componant/dentist-point/edit-template/edit-template.component';
import {PrescriptionHttpService} from './service/prescription-http.service';
import {PrescriptionMockService} from './service/prescription-mock.service';
import {TemplateHttpService} from './service/template-http.service';
import {TemplateMockService} from './service/template-mock.service';
import {AppointmentListComponent} from './componant/dentist-point/appointment-list/appointment-list.component';

import {DoctorLoginComponent} from './componant/dentist-point/auth/doctor-login/doctor-login.component';
import {DoctorLogoutComponent} from './componant/dentist-point/auth/doctor-logout/doctor-logout.component';
import {DoctorSignupComponent} from './componant/dentist-point/auth/doctor-signup/doctor-signup.component';
import {DoctorAuthService} from './service/doctor.auth.service';
import {DoctorAuthHttpService} from './service/doctor.auth-http.service';
import {DoctorAuthMockService} from './service/doctor.auth-mock.service';

import {PatientHomeComponent} from './componant/dentist-point/patient-home/patient-home.component';
import {PatientAuthService} from './service/patient.auth.service';
import {PatientAuthHttpService} from './service/patient.auth-http.service';
import {PatientAuthMockService} from './service/patient.auth-mock.service';
import {PatientHomeLayoutComponent} from './layout/patient-home-layout/patient-home-layout.component';
import {PatientDashboardHeadComponent} from './layout/patient-home-layout/patient-dashboard-head/patient-dashboard-head.component';
import {PatientDashboardSidenavComponent} from './layout/patient-home-layout/patient-template-sidenav/patient-dashboard-sidenav.component';

import {DatePipe} from '@angular/common';
import {PatientCreateAppointmentComponent} from './componant/dentist-point-mobiletoweb/patient-create-appointment/patient-create-appointment.component';
import {PatientShowAppointmentComponent} from './componant/dentist-point-mobiletoweb/patient-show-appointment/patient-show-appointment.component';
import {PatientShowPrescriptionComponent} from './componant/dentist-point-mobiletoweb/patient-show-prescription/patient-show-prescription.component';
import {PatientSignupComponent} from './componant/dentist-point/auth/patient-signup/patient-signup.component';
import {PatientViewMedicineComponent} from './componant/dentist-point-mobiletoweb/patient-view-medicine/patient-view-medicine.component';
import {DentistPointDoctorMenuComponent} from './layout/app-layout/dentist-point-doctor-menu/dentist-point-doctor-menu.component';
import {DentistPointPatientMenuComponent} from './layout/app-layout/dentist-point-patient-menu/dentist-point-patient-menu.component';
import {MenuService} from './service/menu.service';
import {MenuDentistPointDoctorService} from './service/menu-dentist-point-doctor.service';
import {UAAModule} from './uaa/uaa.module';
import {MenuDefaultService} from './service/menu-default.service';
import {ServerManagerModule} from './server-manager/server-manager.module';
import {AuthTokenService} from './service/auth-token.service';
import {AuthTokenMockService} from './service/auth-token-mock.service';
import {AuthTokenHttpService} from './service/auth-token-http.service';
import {LoggedInUserInfoMockService} from './service/logged-in-user-info-mock.service';
import {LoggedInUserInfoHttpService} from './service/logged-in-user-info-http.service';
import {LoggedInUserInfoService} from './service/logged-in-user-info.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    MatExpansionModule,
    MatGridListModule,
    SweetAlert2Module.forRoot(),
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgFlashMessagesModule.forRoot(),
    OwlNativeDateTimeModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF_TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule,
    UAAModule,
    ServerManagerModule
  ],
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHomeComponent,
    PatientDashboardHeadComponent,
    PatientDashboardSidenavComponent,
    DashboardComponent,
    FlashMessageComponent,
    CreatePrescriptionComponent,
    CreatePatientComponent,
    CalendarComponent,
    PrescriptionListComponent,
    PrescriptionViewComponent,
    CreateAppointmentComponent,
    CreateTemplateComponent,
    SettingsComponent,
    EditTemplateComponent,
    AppointmentListComponent,
    DoctorLoginComponent,
    DoctorLogoutComponent,
    DoctorSignupComponent,
    PatientHomeComponent,
    PatientHomeLayoutComponent,
    PatientCreateAppointmentComponent,
    PatientShowAppointmentComponent,
    PatientShowPrescriptionComponent,
    PatientSignupComponent,
    PatientViewMedicineComponent,
    DentistPointDoctorMenuComponent,
    DentistPointPatientMenuComponent,
  ],
  providers: [
    DatePipe,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http401Interceptor,
      multi: true
    },
    {
      provide: AuthTokenService,
      useClass: environment.chumbok.enableMock ? AuthTokenMockService : AuthTokenHttpService
    },
    {
      provide: LoggedInUserInfoService,
      useClass: environment.chumbok.enableMock ? LoggedInUserInfoMockService : LoggedInUserInfoHttpService
    },
    {
      provide: DoctorAuthService,
      useClass: environment.chumbok.enableMock ? DoctorAuthMockService : DoctorAuthHttpService
    },
    {
      provide: PatientAuthService,
      useClass: environment.chumbok.enableMock ? PatientAuthMockService : PatientAuthHttpService
    },
    CookieService,
    {
      provide: PingService,
      useClass: environment.chumbok.enableMock ? PingMockService : PingHttpService
    },
    FlashMessageService,
    {
      provide: AppointmentService,
      useClass: environment.chumbok.enableMock ? AppointmentMockService : AppointmentHttpService
    },
    {
      provide: PrescriptionService,
      useClass: environment.chumbok.enableMock ? PrescriptionMockService : PrescriptionHttpService
    },
    {
      provide: TemplateService,
      useClass: environment.chumbok.enableMock ? TemplateMockService : TemplateHttpService
    },
    PrescriptionHttpService,
    AppointmentHttpService,
    AppointmentMockService,
    PrescriptionMockService,
    TemplateHttpService,
    TemplateMockService,
    {
      provide: MenuService,
      useClass: environment.chumbok.appName === 'dentist-point' ? MenuDentistPointDoctorService : MenuDefaultService
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
