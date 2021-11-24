import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter  } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-user-manage',
  templateUrl: './modal-user-manage.component.html',
  styleUrls: ['./modal-user-manage.component.scss']
})
export class ModalUserManageComponent implements OnInit {
  coursename: string = "";
  maKhoahoc: string = "";


  //Lay data tu component cha
  @Input() userSubcribe: string = "";
  @Input() listCourse: any = [];
  @Input() listWaiting: any = [];
  @Input() listConfirmed: any = [];
  subModal = new Subscription();
  constructor(private dataservice: DataService, private router : Router) { }

  ngOnInit():void{

  }

  //Truyen gia tri tu dropdown menu den form
  setInputvalue(value: any) {
    this.coursename = value.tenKhoaHoc;
    this.maKhoahoc = value.maKhoaHoc;
  }

  //Lay gia tri tu input form de add
  addToWaiting() {
    const obj: any = {
      maKhoaHoc: this.maKhoahoc,
      taiKhoan: this.userSubcribe
    }
    this.dataservice.post('QuanLyKhoaHoc/DangKyKhoaHoc',obj).subscribe();

    const obj2: any = {
      maKhoaHoc: this.maKhoahoc,
      tenKhoaHoc: this.coursename
    }
    let index = this.listWaiting.indexOf(obj2);
    if (index === -1) {
      this.listWaiting.push(obj2);
    }

  }
  //Xoa khoi waiting list
  DeleteFromWait(course: any) {
    console.log(course);
    let obj: any = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: this.userSubcribe
    }
    this.dataservice.post('QuanLyKhoaHoc/HuyGhiDanh',obj).subscribe();

    //Cap nhat lai danh sach hien thi tren modal
    let index = this.listWaiting.indexOf(course);
    this.listWaiting.splice(index, 1);
  }


  DeleteFromConfirmed(course: any){
    console.log(course);
    let obj: any = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: this.userSubcribe
    }

    this.dataservice.post('QuanLyKhoaHoc/HuyGhiDanh',obj).subscribe();

    //Cap nhat lai danh sach hien thi tren modal
    let index = this.listConfirmed.indexOf(course);
    this.listConfirmed.splice(index, 1);

  }

  confirmSubscribe(course: any){
    let obj: any = {
      maKhoaHoc : course.maKhoaHoc,
      taiKhoan : this.userSubcribe
    }
    this.dataservice.post('QuanLyKhoaHoc/GhiDanhKhoaHoc',obj).subscribe();
    let index = this.listWaiting.indexOf(course);
    this.listWaiting.splice(index, 1);
    this.listConfirmed.push(course);
  }

  ngOnDestroy(){
    this.subModal.unsubscribe();
  }
  destroy(){
    this.ngOnDestroy();
  }
}
