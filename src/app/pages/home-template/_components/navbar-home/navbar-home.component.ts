import { DataService } from './../../../../_core/services/data.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  listDanhMuc : any = [];
  account: any ;
  constructor(private dataservice: DataService, private router:Router) { }



  ngOnInit(): void {
    this.account= localStorage.getItem("UserAdmin");
    this.getDanhMuc();
  }
  getDanhMuc(){
    this.dataservice.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc").subscribe((result: any )=>{
        this.listDanhMuc = result;

    })
  }
  clickme(value: any){
    this.router.navigate(['/search-course',value]).then(()=>{
       window.location.reload();
    });
  }

  navigateitem(item:any){
    this.router.navigate([`/list-course-menu/${ item }`]).then(()=>{
      window.location.reload();
    })
  }

  Logout(){
    localStorage.removeItem("UserAdmin");
    this.ngOnInit();
  }

}
