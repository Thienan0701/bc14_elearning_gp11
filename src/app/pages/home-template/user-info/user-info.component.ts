import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  username: any;
  password: any;
  fullname: any;
  email: any;
  phonenumber: any;
  accessToken: any;
  listGhiDanh : any = [];

  subInfo = new Subscription();


  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getUserInfo();

  }

  getUserInfo(){
    const account: any= localStorage.getItem('UserAdmin');
    // console.log(account);
    this.accessToken=JSON.parse(account).accessToken;
    this.subInfo=this.dataservice.post("QuanLyNguoiDung/ThongTinNguoiDung",this.accessToken).subscribe((result:any)=>{
      this.fullname=result.hoTen;
      this.username=result.taiKhoan;
      this.email=result.email;
      this.phonenumber=result.soDT;
      this.listGhiDanh= result.chiTietKhoaHocGhiDanh;
      this.password= result.matKhau;
    })
  }
  ngOnDestroy(){
    this.subInfo.unsubscribe();
  }

}
