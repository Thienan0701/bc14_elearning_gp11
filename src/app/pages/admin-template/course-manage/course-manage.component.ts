import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

@Component({
  selector: 'app-course-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.scss']
})


export class CourseManageComponent implements OnInit {



  public Editor = ClassicEditor;

  //Lay danh sach phan trang
  number: number = 1; //Stt ttrang ban dau
  listCoursePaging: any =[];
  totalpages: number = 0;
  pagenumList: any = [];

  //Lay danh muc khoa hoc
  listDanhmuc: any = [];

  isDisabled: boolean = false;

  //Lay danh sach nguoi dung chua ghi danh khoa hoc
  maKhoaHoc: any;
  listUsers: any = [];
  listUserWaiting: any=[];
  listUserConfirmed: any = [];

  //Lay khoa hoc can edit
    courseEdit: any;

  subListCoure = new Subscription();
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getListCourseInit();
    this.getDanhMuc();
  }

  getListCourseInit(){
    this.subListCoure=this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${this.number}&pageSize=8&MaNhom=GP01`)
    .subscribe((result: any)=>{
      this.listCoursePaging= result.items.sort((a: any, b: any) => (a.tenKhoaHoc > b.tenKhoaHoc) ? 1 : -1);
      //console.log(this.listCoursePaging)
      this.totalpages = result.totalPages;
      for(let i=1; i< this.totalpages; i++){
        this.pagenumList.push(i);
      }
    });

  }

  getListofPage(num: number){
    this.number= num;
   this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${num}&pageSize=8&MaNhom=GP01`)
   .subscribe((result: any)=>{
     this.listCoursePaging= result.items.sort((a: any, b: any) => (a.tenKhoaHoc > b.tenKhoaHoc) ? 1 : -1);
   });
  }
  //Search course
   //Search user
   searchCourse(keyword :any){
    if(keyword){
      this.dataservice.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP01`).subscribe((result:any)=>{
        this.listCoursePaging=result;
      });
    }else{
      this.getListofPage(this.number);
    }
  }

  upLoadImg(img:any){
    this.dataservice.post('QuanLyKhoaHoc/ThemKhoaHocUploadHinh',img).subscribe();
  }



  addCourse(value : any){
    value.maNhom="GP01";
    const account: any= localStorage.getItem('UserAdmin');
    value.taiKhoanNguoiTao= JSON.parse(account).taiKhoan;
    this.upLoadImg(value.hinhAnh);
    this.dataservice.post('QuanLyKhoaHoc/ThemKhoaHoc', value).subscribe((result)=>{
      if (result) {
        this.router.navigateByUrl('/admin/dashboard', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admin/course-manage']);
      });
      }
    });
  }

  getDanhMuc(){
    this.dataservice.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result: any)=>{
      this.listDanhmuc= result;
    });
  }

  //Lay ds user chua dang ky khoa
  getUsersNotInCource(maKhoaHoc: any){
    this.maKhoaHoc=maKhoaHoc;
    let obj : any = {
      maKhoaHoc : maKhoaHoc
    }
    this.dataservice.post('QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',obj).subscribe((result:any)=>{
        this.listUsers= result;
    });
    this.getUserWaiting(maKhoaHoc);
    this.getUserConfirmed(maKhoaHoc);
  }

  //Lay danh sach user dang cho dc duyet khoa
  getUserWaiting(value: any){
    let obj : any = {
      maKhoaHoc : value
    };
    this.dataservice.post('QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',obj).subscribe((result: any)=>{
      this.listUserWaiting = result;
    });
  }

  //Lay ds user da dc duyet khoa
  getUserConfirmed(value: any){
    let obj : any = {
      maKhoaHoc : value
    };
    this.dataservice.post('QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',obj).subscribe((result: any)=>{
      this.listUserConfirmed= result;
    });
  }

  //Xoa khoa hoc
  deleteCourse(maKhoaHoc:any){
    this.dataservice.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`).subscribe();
    this.getListofPage(this.number);
  }

  getEditCourse(maKhoaHoc: any){
    this.dataservice.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`).subscribe((result:any)=>{
      this.courseEdit=result;
      console.log(result);
    });
  }

  ngOnDestroy(){
    this.subListCoure.unsubscribe();
  }

}
