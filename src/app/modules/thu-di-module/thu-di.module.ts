import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PrimengmoduleModule} from "../base-module/primengmodule.module";
import { VanThuComponent } from './components/nhap-moi/van-thu-nhap-moi/van-thu.component';
import { NhanVienComponent } from './components/nhap-moi/nhan-vien-nhap-moi/nhan-vien.component';
import {NhapMoiComponent} from "./components/nhap-moi/nhap-moi.component";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {FormsModule} from "@angular/forms";
import { ThuDangSoanComponent } from './components/thu-dang-soan/thu-dang-soan.component';
import { NhanVienSoanThuComponent } from './components/thu-dang-soan/nhan-vien-soan-thu/nhan-vien-soan-thu.component';
import { VanThuSoanThuComponent } from './components/thu-dang-soan/van-thu-soan-thu/van-thu-soan-thu.component';
import {ThuChoXyLyComponent} from "./components/thu-cho-xy-ly/thu-cho-xy-ly.component";
import {VanThuChoXuLyComponent} from "./components/thu-cho-xy-ly/van-thu-cho-xu-ly/van-thu-cho-xu-ly.component";
import {MessageService} from "primeng/api";
import { ThuDaGuiComponent } from './components/thu-da-gui/thu-da-gui.component';
import { NhanVienThuDaGuiComponent } from './components/thu-da-gui/nhan-vien-thu-da-gui/nhan-vien-thu-da-gui.component';
import { VanThuThuDaGuiComponent } from './components/thu-da-gui/van-thu-thu-da-gui/van-thu-thu-da-gui.component';


const routes: Routes = [
  {path: 'nhap-moi', component: NhapMoiComponent},
  {path: 'thu-dang-soan', component: ThuDangSoanComponent},
  {path: 'thu-cho-xu-ly', component: ThuChoXyLyComponent},
]

@NgModule({
  declarations: [
    NhapMoiComponent,
    VanThuComponent,
    NhanVienComponent,
    ThuDangSoanComponent,
    NhanVienSoanThuComponent,
    VanThuSoanThuComponent,
    ThuChoXyLyComponent,
    VanThuChoXuLyComponent,
    ThuDaGuiComponent,
    NhanVienThuDaGuiComponent,
    VanThuThuDaGuiComponent

  ],
  imports: [
    FormsModule,
    AutocompleteLibModule,
    PrimengmoduleModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [
    MessageService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class ThuDiModule { }
