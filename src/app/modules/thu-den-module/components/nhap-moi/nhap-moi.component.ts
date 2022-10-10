import {Component, OnInit} from '@angular/core';
import {NhapMoiService} from "./nhap-moi.service";
import {iComponentBase} from "../../../base-module/functions/iServiceBase";
import {Title} from "@angular/platform-browser";
import {MessageService} from "primeng/api";
import {NhanVienModel} from "../../../base-module/models/nhan-vien/nhan-vien.model";
import {SharedApi} from "../../../base-module/service-base/api.shared.services";
import {LocalStorageService} from "../../../system-module/functions/store/local-storage.service";
import {DonViModel} from "../../../base-module/models/don-vi/don-vi-gui.model";
@Component({
  selector: 'app-nhap-moi',
  templateUrl: './nhap-moi.component.html',
  styleUrls: ['./nhap-moi.component.scss']
})
export class NhapMoiComponent extends iComponentBase implements OnInit {
  first = 1;
  isVanthu = false;
  checkNhanVien: any;
  checkVanThu: any;
  user: NhanVienModel; // full thông tin người dùng.
  listTypeLetters: any; // list checkbox thư nội bộ và bên ngoài
  checkboxTypeLetter: any;
  showVanDon = false;
  listVanDon: any;
  selectedListVanDon: any // selected row vận đơn table
  listSoThuDi: any;
  selectedSoThuDi: any;
  listCoQuan: DonViModel[];
  selectedCoQuan: DonViModel;
  listDonViTrucThuocNhan: DonViModel[];
  selectedDonViTrucThuocNhan: DonViModel;
  listNguoiNhan: NhanVienModel[];
  selectedNguoiNhan: NhanVienModel;


  constructor(public title: Title,
              private sharedApi: SharedApi,
              private tokenStorageService: LocalStorageService,
              public msg: MessageService) {
    super(msg, title);
    this.checkNhanVien = window.localStorage.getItem('nhanvien')
    this.checkVanThu = window.localStorage.getItem('vanthu')
  }

  ngOnInit(): void {
    if (this.checkNhanVien) {
      this.isVanthu = false
    } else {
      this.isVanthu = true
    }
    this.user = this.tokenStorageService.getUserFromStorage(); // get thông tin người dùng đăng nhập trong hệ thống
    this.listTypeLetters = [{name: 'Nội bộ', key: '1'}, {name: 'Bên ngoài', key: '2'}];  // selection loại thư bên trong và bên ngoài
    this.checkboxTypeLetter = this.listTypeLetters[0]; // Selected mặc định thư nội bộ khi vào màn hình.
    this.getThuDen();
  }
  // action chọn loại thư nội bộ hoặc bên ngoài để xử lý vấn đề gì đấy
  typeLetterAction() {
    if (this.checkboxTypeLetter.key == '1') {
    } else {
    }
    console.log( this.checkboxTypeLetter)
  }

  initData(){
    // lấy sổ thư đi.
    this.sharedApi.getSoThuDi().subscribe(data => {
      this.listSoThuDi = data.result.items;
    })
    // get don vị
    this.sharedApi.getAllDonVi().subscribe(data => {
      this.listCoQuan = data.result.items;
    })
  }

  // get data theo parent
  getDonViTrucThuoc(){
    // get đơn vị nhận theo đơn vị nhận
    if (this.selectedCoQuan == undefined) {
      this.listDonViTrucThuocNhan = [];
    } else
      this.sharedApi.getParentOrganizations(this.selectedCoQuan.sysOrganizationId).subscribe((data: any)=> {
        this.listDonViTrucThuocNhan = data.result.items;
      })
  }

  getNhanVien(){
    // get nhan vien theo bo phan
    if (this.selectedDonViTrucThuocNhan == undefined) {
      this.listNguoiNhan = [];
    } else
      this.sharedApi.getPersonByParentOganization(this.selectedDonViTrucThuocNhan.sysOrganizationId).subscribe((data: any) => {
        this.listNguoiNhan = data.result.items;
      })
  }

  onShowVanDon(){
    try {
      this.showVanDon = true;
      this.initData();
    }catch (e) {
      console.log(e)
    }
  }

  getThuDen(){
    const param = {
      status: 5,
      organizationId:  null,
      year: null,
      keyword: null
    }
    this.sharedApi.getThuDiTheoTrangThai(param).subscribe((data: any) => {
      this.listVanDon = data.result.content;
    })
  }

  onRowSelect(ev: any) {}


  refresh(){
    window.location.reload();
  }
}
