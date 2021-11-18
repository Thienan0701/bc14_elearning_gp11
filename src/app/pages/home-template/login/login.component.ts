import { Component, Output, EventEmitter , OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private dataservice:DataService, private router :Router) { }

  ngOnInit(): void {
  }
  loginHome(user: any){
    this.dataservice.post("QuanLyNguoiDung/DangNhap",user).subscribe((result)=>{
      if(result.maLoaiNguoiDung === "HV"){
        //Luu xuong local storage
        localStorage.setItem('UserAdmin', JSON.stringify(result));

        //chuyen huong den Home
        this.router.navigate(['/']);
      }else{
        localStorage.setItem('UserAdmin', JSON.stringify(result));
        //chuyen huong den Dashboard
        this.router.navigate(['/admin/dashboard']);
      }
    })
  }

}
