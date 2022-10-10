export interface NhanVienModel {
  employeeId?: number,
  organization?: {
    name?: string;
    orgParent?: {
      name?: string;
    }
  },
  employeeCode?: string,
  positionName?: string,
  fullName?: string,
  mobilePhone?: string,
  telephone?: string,
  displayName?: string,
  username?: string,
  roles?: string,
}

