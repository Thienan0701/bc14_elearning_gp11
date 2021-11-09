import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private dataService:DataService, private router :Router) { }

  ngOnInit(): void {
  }

  login(user: any){
    //console.log(user);
    this.dataService.post("QuanLyNguoiDung/DangNhap",user).subscribe((result)=>{

      if(result.maLoaiNguoiDung === "GV"){
        //Luu xuong local storage
        localStorage.setItem('UserAdmin', JSON.stringify(result));

        //chuyen huong den Dashboard
        this.router.navigate(['/admin/dashboard']);
      }else{
        //Thong bao neu ma loai user = HV
        alert("Tk ko co quyen truy cap")
      }
    })
  }

}
