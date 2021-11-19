import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  constructor(private dataService: DataService) { }
  listUserPaging: any = [];
  ngOnInit(): void {
    this.getListUserPaging();
  }

  getListUserPaging(){
    this.dataService.get("QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=1&pageSize=10")
    .subscribe((result:any)=>{
      this.listUserPaging= result.items;
    })
  }

  addUser(user:any){
    user.maLoaiNguoiDung = "HV";
    user.maNhom="GP01"
    this.dataService.post("QuanLyNguoiDung/ThemNguoiDung",user).subscribe((result)=>{
      console.log(result);
    })
    this.ngOnInit();
    //console.log(user)
  }

}
