import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TemplateHeadComponent} from './componant/template-head/template-head.component';
import {TemplateTopnavComponent} from './componant/template-topnav/template-topnav.component';
import {TemplateSidenavComponent} from './componant/template-sidenav/template-sidenav.component';
import {LoginComponent} from './componant/login/login.component';
import {AppLayoutComponent} from './componant/app-layout/app-layout.component';
import {SiteLayoutComponent} from './componant/site-layout/site-layout.component';
import {SiteHomeComponent} from './componant/site-home/site-home.component';
import {DashboardComponent} from './componant/dashboard/dashboard.component';
import {FlashMessageComponent} from './componant/flash-message/flash-message.component';
import {AuthService} from './service/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './guard/auth.guard';
import {LogoutComponent} from './componant/logout/logout.component';
import {PingService} from './service/ping.service';
import {FlashMessageService} from './service/flash-message.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http401Interceptor} from './interceptor/Http401Interceptor';
import {LoggedInUserInfoService} from './service/logged-in-user-info.service';
import {OrgListComponent} from './componant/org-list/org-list.component';
import {TenantListComponent} from './componant/tenant-list/tenant-list.component';
import {UserListComponent} from './componant/user-list/user-list.component';
import {OrgTenantUserService} from './service/org-tenant-user.service';
import { CreateOrgComponent } from './componant/create-org/create-org.component';
import { CreateTenantComponent } from './componant/create-tenant/create-tenant.component';
import { CreateUserComponent } from './componant/create-user/create-user.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })
  ],
  declarations: [
    AppComponent,
    TemplateHeadComponent,
    TemplateTopnavComponent,
    TemplateSidenavComponent,
    LoginComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    SiteHomeComponent,
    DashboardComponent,
    FlashMessageComponent,
    LogoutComponent,
    OrgListComponent,
    TenantListComponent,
    UserListComponent,
    CreateOrgComponent,
    CreateTenantComponent,
    CreateUserComponent
  ],
  providers: [
    AuthService,
    CookieService,
    PingService,
    FlashMessageService,
    LoggedInUserInfoService,
    OrgTenantUserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http401Interceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
