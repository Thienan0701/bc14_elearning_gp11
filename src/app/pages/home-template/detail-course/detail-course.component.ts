import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  detail: any = [];
  id: any;
  constructor(private activatedRoute : ActivatedRoute, private data:DataService,private _location: Location) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetail();
  }

  getParamsFromUrl(){
    //Lay 1 param tu url
   this.id= this.activatedRoute.snapshot.paramMap.get("id");


  //Lay nhieu params
    // this.activatedRoute.queryParamMap.subscribe((parms)=>console.log(parms))
  }

  getDetail(){
    this.data.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`).subscribe(( result:any)=>{
      this.detail=result;
    });

  }
  subcribeCourse(object: any){
    const account: any= localStorage.getItem('UserAdmin');
    const sub : any = {
      maKhoaHoc : object.maKhoaHoc,
      taiKhoan : JSON.parse(account).taiKhoan
    };
    this.data.post("QuanLyKhoaHoc/DangKyKhoaHoc",sub).subscribe();
    this._location.back();
  }

}
