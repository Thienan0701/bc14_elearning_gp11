import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-courses-from-menu',
  templateUrl: './courses-from-menu.component.html',
  styleUrls: ['./courses-from-menu.component.scss']
})
export class CoursesFromMenuComponent implements OnInit {
  id: any ;

  constructor(private activatedRoute : ActivatedRoute, private dataservice: DataService) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
  }
  getParamsFromUrl(){
    //Lay 1 param tu url
   this.id= this.activatedRoute.snapshot.paramMap.get("id");
  }


}
