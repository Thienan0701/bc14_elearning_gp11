import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  constructor() { }
  @Input() fullname: any;
  @Input() username: any;
  @Input() email: any;
  @Input() phonenumber: any;
  ngOnInit(): void {
  }

  edit(info: any){
    console.log(info);
  }

}
