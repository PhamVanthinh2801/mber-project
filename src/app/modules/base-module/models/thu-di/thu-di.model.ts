export interface ThuDiModel {
  id?:number,
  type?: number, //phân loại thư
  isSample?: boolean // thư mẫu
  staff?: object, // nhân viên lấy từ hệ thống đăng nhập
  letterCode?: object | any, // sổ thư đi
  code?: number, // Mã thư đi,
  inputDate?: Date, // Ngày nhập
  sendDate?: Date, // Ngày gửi
  sendUnit?: object, // đơn vị gửi
  affiliatedSendUnit?: object, // đơn vị trực thuộc gửi
  sender?: {
    employeeId?: number
  }, // người gửi
  textCode?: string, // Số hiệu văn bản
  summary?: string, // trích yếu
  securityLevel?: object, // độ mật
  urgencyLevel?: object, // độ khẩn
  receivePlace?: object, // Nơi nhận,
  receiveUnit?: object,  // đơn vị nhận
  outSiteReceive?: object, // Nơi nhận bên ngoài
  affiliatedReceiveUnit?: object, // đơn vị trực thuộc nhận
  recipient?: {
    employeeId?: number
  }, // Người nhận
  mobilePhone?: string, // Số điện thoại,
  receiveAddress?: string // địa chỉ nhận
  status?: number // trạng thái của thư
}
