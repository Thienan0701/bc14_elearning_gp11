import { DataService } from './../../../../_core/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {

  listDanhMuc : any = [];

  constructor(private dataservice: DataService) { }



  ngOnInit(): void {
    this.getDanhMuc();
  }
  getDanhMuc(){
    this.dataservice.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc").subscribe((result: any )=>{
        this.listDanhMuc = result;
    })
  }

}
