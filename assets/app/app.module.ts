import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RouterConfig} from './router.config';

import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent} from './auth/register/register.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { ErrorComponent} from './error/error.component';
import { LoginComponent} from './auth/login/login.component';
import { LoginFormComponent} from './auth/login-form/login-form.component';
import { EmployeeComponent} from './employee/employee.component';
import { SearchComponent} from './search/search.component';
import { SearchFormComponent} from './search/search-form/search-form.component';

import { AuthService} from './shared/services/auth.service';
import { EmployeeService } from './shared/services/employee.service';
import { ErrorService } from './shared/services/error.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    RegisterComponent,
    RegisterFormComponent,
    ErrorComponent,
    LoginComponent,
    LoginFormComponent,
    EmployeeComponent,
    SearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [AuthService, EmployeeService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
