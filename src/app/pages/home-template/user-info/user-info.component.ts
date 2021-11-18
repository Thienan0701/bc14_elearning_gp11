import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  username: any;
  fullname: any;
  email: any;
  phonenumber: any;
  accessToken: any;
  listGhiDanh : any = [];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    const account: any= localStorage.getItem('UserAdmin');
    console.log(account);
    this.fullname=JSON.parse(account).hoTen;
    this.username=JSON.parse(account).taiKhoan;
    this.email=JSON.parse(account).email;
    this.phonenumber=JSON.parse(account).soDT;
    this.accessToken=JSON.parse(account).accessToken;
    this.dataservice.post("QuanLyNguoiDung/ThongTinNguoiDung",this.accessToken).subscribe((result:any)=>{
      this.listGhiDanh= result.chiTietKhoaHocGhiDanh;
    })
  }

}
