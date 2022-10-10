import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NhapMoiComponent } from './components/nhap-moi/nhap-moi.component';
import {RouterModule, Routes} from "@angular/router";
import { ThuMoiComponent } from './components/thu-moi/thu-moi.component';
import {HttpClientModule} from "@angular/common/http";
import { NhanVienThuMoiComponent } from './components/thu-moi/nhan-vien-thu-moi/nhan-vien-thu-moi.component';
import { VanThuThuMoiComponent } from './components/thu-moi/van-thu-thu-moi/van-thu-thu-moi.component';
import {PrimeNgModule} from "../primeng-module/primeng.module";
import { NhanVienNhapMoiComponent } from './components/nhap-moi/nhan-vien-nhap-moi/nhan-vien-nhap-moi.component';
import { VanThuNhapMoiComponent } from './components/nhap-moi/van-thu-nhap-moi/van-thu-nhap-moi.component';

const routes: Routes = [
  {path: 'nhap-moi', component: NhapMoiComponent},
  {path: 'thu-moi', component: ThuMoiComponent},
]

@NgModule({
  declarations: [
    NhapMoiComponent,
    ThuMoiComponent,
    NhanVienThuMoiComponent,
    VanThuThuMoiComponent,
    NhanVienNhapMoiComponent,
    VanThuNhapMoiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PrimeNgModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class ThuDenModule { }
