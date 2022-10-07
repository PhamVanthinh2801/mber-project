import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StepsModule} from "primeng/steps";
import {LoginComponent} from "./modules/system-module/components/login-component/login.component";
import {appRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {PrimengmoduleModule} from "./modules/base-module/primengmodule.module";
import {ThuDenModule} from "./modules/thu-den-module/thu-den.module";
import {ThuDiModule} from "./modules/thu-di-module/thu-di.module";
import {DanhMucModule} from "./modules/danh-muc-module/danh-muc.module";
import { TopMenuComponent } from './app-menu/top-menu/top-menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./modules/base-module/service-base/MyHttpInterceptor";


@NgModule({
  imports: [
    PrimengmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    StepsModule,
    BrowserModule,
    HttpClientModule,
    ThuDenModule,
    ThuDiModule,
    DanhMucModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TopMenuComponent,
  ],
  exports:[
    PrimengmoduleModule,
    LoginComponent,
    ThuDenModule,
    ThuDiModule,
    DanhMucModule,
  ],
  providers: [
    authInterceptorProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
