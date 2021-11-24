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
    //Thay the duong link = home va tro lai dg link can huong den de ko phai reload trang
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/search-course',value]);
    });

  }

  navigateitem(item:any){

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/list-course-menu/${ item }`]);
  });
  }

  Logout(){
    localStorage.removeItem("UserAdmin");
    this.ngOnInit();
  }

}
