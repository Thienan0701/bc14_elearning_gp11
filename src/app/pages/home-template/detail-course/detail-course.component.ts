import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { DataService } from 'src/app/_core/services/data.service';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  detail: any = [];
  id: any;
  constructor(private activatedRoute : ActivatedRoute, private data:DataService) { }

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
    this.data.getDetailCourse(this.id).subscribe(( result:any)=>{
      this.detail=result;
      console.log(this.detail);
    });

  }

}
