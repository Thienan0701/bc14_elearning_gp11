import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { DataService } from '@services/data.service';
import {Subscription} from "rxjs"
@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {

  name: any;
  listSearch: any = [];
  soKetQua :number = 0;
  subListSearch = new Subscription();
  constructor(private activatedRoute : ActivatedRoute, private data:DataService) { }


  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getListSearch();
  }
  ngAfterViewInit(){
    this.getParamsFromUrl();
    this.getListSearch();
  }
  getParamsFromUrl(){
    //Lay 1 param tu url
   this.name= this.activatedRoute.snapshot.paramMap.get("name");
   console.log(this.name);
  }
  getListSearch(){
    this.subListSearch=this.data.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${this.name}&MaNhom=GP01`)
    .subscribe((result: any)=>{
      this.listSearch=result;
      this.soKetQua  = result.length;
      console.log(this.listSearch);
    });
  }
  ngOnDestroy(){
    this.subListSearch.unsubscribe();
  }

}
