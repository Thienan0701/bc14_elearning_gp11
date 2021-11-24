import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() id : any;
  listcourses: any = [];
  subListCourse = new Subscription();
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getListFromId();
  }
  getListFromId(){
    this.subListCourse=this.dataservice.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.id}&MaNhom=GP01`).subscribe((result:any)=>{
      this.listcourses = result;
    })
  }

  ngOnDestroy(){
    this.subListCourse.unsubscribe();
  }

}
