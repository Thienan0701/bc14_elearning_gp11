import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse : any = [];
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.data.getListCourse().subscribe((result: any)=>{
      console.log(result)
      this.listCourse= result;
    });
  }

}
