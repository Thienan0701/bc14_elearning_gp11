import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-subscribe-course',
  templateUrl: './modal-subscribe-course.component.html',
  styleUrls: ['./modal-subscribe-course.component.scss']
})
export class ModalSubscribeCourseComponent implements OnInit {

  constructor() { }
  username: string="";
  @Input() maKhoaHoc:any;
  @Input() listUsers: any=[];
  @Input() listUserWaiting: any=[];
  @Input() listUserConfirmed : any = [];
  ngOnInit(): void {
  }

  setInputvalue(user:any){
    this.username= user.taiKhoan;
  }

}
