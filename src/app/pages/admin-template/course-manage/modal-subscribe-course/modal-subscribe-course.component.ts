import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-subscribe-course',
  templateUrl: './modal-subscribe-course.component.html',
  styleUrls: ['./modal-subscribe-course.component.scss']
})
export class ModalSubscribeCourseComponent implements OnInit {

  constructor(private dataservice: DataService) { }
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

  addToWaiting(){
    let obj:any={
      maKhoaHoc: this.maKhoaHoc,
      taiKhoan: this.username
    }

    this.dataservice.post('QuanLyKhoaHoc/DangKyKhoaHoc',obj).subscribe();
    //push de hien thi len giao dien ma ko can tat modal
    let obj2 : any = {
      taiKhoan: this.username,
      biDanh: "",
      hoTen: ""
    }
    let index = this.listUserWaiting.indexOf(obj2);
    if (index == -1) {
      this.listUserWaiting.push(obj2);
    }
  }

    //Xoa khoi waiting list
    deleteFromWait(user: any) {

      let obj: any = {
        maKhoaHoc: this.maKhoaHoc,
        taiKhoan: user.taiKhoan
      }

      this.dataservice.post('QuanLyKhoaHoc/HuyGhiDanh',obj).subscribe();

      //Cap nhat lai danh sach hien thi tren modal
      let index = this.listUserWaiting.indexOf(user);
      this.listUserWaiting.splice(index, 1);
    }


    deleteFromConfirm(user: any) {

      let obj: any = {
        maKhoaHoc: this.maKhoaHoc,
        taiKhoan: user.taiKhoan
      }

      this.dataservice.post('QuanLyKhoaHoc/HuyGhiDanh',obj).subscribe();

      //Cap nhat lai danh sach hien thi tren modal
      let index = this.listUserConfirmed.indexOf(user);
      this.listUserConfirmed.splice(index, 1);
    }

    confirmSubscribe(user: any){
    let obj: any = {
      maKhoaHoc : this.maKhoaHoc,
      taiKhoan : user.taiKhoan
    }
    this.dataservice.post('QuanLyKhoaHoc/GhiDanhKhoaHoc',obj).subscribe();
    let index = this.listUserWaiting.indexOf(user);
    this.listUserWaiting.splice(index, 1);
    this.listUserConfirmed.push(user);
  }
}
