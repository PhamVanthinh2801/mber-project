import {Component, OnInit} from '@angular/core';
import {ThuMoiService} from "./thu-moi.service";

@Component({
  selector: 'app-thu-moi',
  templateUrl: './thu-moi.component.html',
  styleUrls: ['./thu-moi.component.scss']
})
export class ThuMoiComponent implements OnInit {
  isVanthu = false;
  checkNhanVien: any;
  checkVanThu: any;
  constructor(private service: ThuMoiService) {
    this.checkNhanVien = window.localStorage.getItem('nhanvien')
    this.checkVanThu = window.localStorage.getItem('vanthu')
  }
  ngOnInit(): void {
    if(this.checkNhanVien){
      this.isVanthu = false
    }else{
      this.isVanthu = true
    }
  }
}
