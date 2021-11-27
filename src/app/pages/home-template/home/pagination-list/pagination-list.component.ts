import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit {
  pagList : any = [];
  pageNumbers: any = [];

  subList = new Subscription();

  constructor(private dataservice: DataService) { }

  page : number = 0;

  ngOnInit(): void {
    this.getPaginationList();


  }


  getPaginationList(){
    this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=8&MaNhom=GP01`)
    .subscribe((result:any)=>{
      this.pagList= result;
      for (let i = 1; i <= result.totalPages; i++) {
        this.pageNumbers.push(i);
     }
    })
  }
  getListFromNumber(num: number){
    this.page = num;

    this.subList=this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${this.page}&pageSize=8&MaNhom=GP01`)
    .subscribe((result:any)=>{
      this.pagList= result;
    });
  }

  ngOnDestroy(){
    this.subList.unsubscribe();
  }


}
