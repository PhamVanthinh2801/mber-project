import {Component, OnInit} from '@angular/core';
import {NhapMoiService} from "./nhap-moi.service";
@Component({
  selector: 'app-nhap-moi',
  templateUrl: './nhap-moi.component.html',
  styleUrls: ['./nhap-moi.component.scss']
})
export class NhapMoiComponent implements OnInit {

  constructor(private serviceNhapMoi: NhapMoiService) {

  }
  ngOnInit(): void {

  }

}
