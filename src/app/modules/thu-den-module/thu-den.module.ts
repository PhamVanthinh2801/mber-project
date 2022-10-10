import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NhapMoiComponent } from './components/nhap-moi/nhap-moi.component';
import {RouterModule, Routes} from "@angular/router";
import { ThuMoiComponent } from './components/thu-moi/thu-moi.component';
import {HttpClientModule} from "@angular/common/http";
import {PrimeNgModule} from "../primeng-module/primeng.module";
import {FormsModule} from "@angular/forms";
import {AutocompleteLibModule} from "angular-ng-autocomplete";
import {BaseModule} from "../base-module/base.module";
import {MessageService} from "primeng/api";

const routes: Routes = [
  {path: 'nhap-moi', component: NhapMoiComponent},
  {path: 'thu-moi', component: ThuMoiComponent},
]

@NgModule({
  declarations: [
    NhapMoiComponent,
    ThuMoiComponent,
  ],
  imports: [
    FormsModule,
    AutocompleteLibModule,
    PrimeNgModule,
    RouterModule.forChild(routes),
    BaseModule,
  ],
  exports: [],
  providers: [
    MessageService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class ThuDenModule { }
