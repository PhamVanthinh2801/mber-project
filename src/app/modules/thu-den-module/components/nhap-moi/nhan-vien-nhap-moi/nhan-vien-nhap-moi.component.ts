import { Component, OnInit } from '@angular/core';
import {iComponentBase} from "../../../../base-module/functions/iServiceBase";
import {Title} from "@angular/platform-browser";
import {SharedApi} from "../../../../base-module/service-base/api.shared.services";
import {MessageService} from "primeng/api";
import {LocalStorageService} from "../../../../system-module/functions/store/local-storage.service";
import {NhanVienModel} from "../../../../base-module/models/nhan-vien/nhan-vien.model";

@Component({
  selector: 'app-nhan-vien-nhap-moi',
  templateUrl: './nhan-vien-nhap-moi.component.html',
  styleUrls: ['./nhan-vien-nhap-moi.component.scss']
})
export class NhanVienNhapMoiComponent extends iComponentBase implements OnInit{
  user: NhanVienModel; // full thông tin người dùng.
  listTypeLetters: any; // list checkbox thư nội bộ và bên ngoài
  checkboxTypeLetter: any;
  showVanDon = false;
  listVanDon: any;

  constructor(public title: Title,
              private sharedApi: SharedApi,
              private tokenStorageService: LocalStorageService,
              public msg: MessageService) {
    super(msg, title);
  }

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUserFromStorage(); // get thông tin người dùng đăng nhập trong hệ thống
    this.listTypeLetters = [{name: 'Nội bộ', key: '1'}, {name: 'Bên ngoài', key: '2'}];  // selection loại thư bên trong và bên ngoài
    this.checkboxTypeLetter = this.listTypeLetters[0]; // Selected mặc định thư nội bộ khi vào màn hình.
  }
  // action chọn loại thư nội bộ hoặc bên ngoài để xử lý vấn đề gì đấy
  typeLetterAction() {
    console.log('xxxx', this.checkboxTypeLetter);
    if (this.checkboxTypeLetter.key == '1') {
    } else {
    }
  }

  onShowVanDon(){
    try {
      this.showVanDon = true;
    }catch (e) {
      console.log(e)
    }
  }

  refresh(){
    window.location.reload();
  }
}
