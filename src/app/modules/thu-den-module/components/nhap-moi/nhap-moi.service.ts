import {apiServiceBase} from "../../../base-module/service-base/api-service-base";
import * as API  from "../../../base-module/service-base/api-gateway";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NhapMoiService extends apiServiceBase{
    createThuMoi(sParam: any){
      return this.postData(API.PHAN_HE.THU_DEN, API.API_THU_DEN.CREATE_THU_MOI, sParam);
    }
}
