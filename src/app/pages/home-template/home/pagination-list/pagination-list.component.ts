import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit {
  pagList : any = []
  pageNumbers: any = []
  constructor(private dataservice: DataService) { }

  page : number = 0;
  ngOnInit(): void {
    this.getPaginationList();


  }


  getPaginationList(){
    this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=8&MaNhom=GP01`)
    .subscribe((result:any)=>{
      this.pagList= result;
      console.log(this.pagList);
      for (let i = 1; i <= this.pagList.totalPages; i++) {
        this.pageNumbers.push(i);
        console.log(this.pageNumbers)
     }
    })
  }
  getListFromNumber(num: number){
    this.page = num;
    this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${this.page}&pageSize=8&MaNhom=GP01`)
    .subscribe((result:any)=>{
      this.pagList= result;
      console.log(this.pagList);
    })
  }


}
