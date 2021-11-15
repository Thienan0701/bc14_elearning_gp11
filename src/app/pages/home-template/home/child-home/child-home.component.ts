import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent implements OnInit {

  @Input() data : any;
  constructor() { }
  ngOnChanges(change: SimpleChange){
      console.log(change);
  }
  ngOnInit(): void {
  }

}
