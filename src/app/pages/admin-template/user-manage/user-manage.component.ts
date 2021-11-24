
import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  username: string = "";
  userCourseList: any = [];
  listUserPaging: any = [];

  listWaiting: any = [];
  listConfirmed: any = [];

  //Phan trang
  pagenums:any = [];
  number : number = 1;
  maxpage: number = 0;
  soTrang: any;


  //Thong tin ng dung cho modal Edit
  userEdit: any;


  subManage = new Subscription();
  constructor(private dataService: DataService, private router:Router) { }
  ngOnInit(): void {
    this.getListUserPaging();

  }

  getListUserPaging(){
    this.subManage=this.dataService.get(`QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${this.number}&pageSize=10`)
    .subscribe((result:any)=>{

      //Sap xep theo ten tai khoan
      this.listUserPaging= result.items.sort((a: any, b: any) => (a.taiKhoan > b.taiKhoan) ? 1 : -1);
      this.maxpage =  result.totalPages;
          //Lay danh sach so trang
    for (let i = 1; i < this.maxpage; i++) {
      this.pagenums.push(i);
   }
    })
  }

  //Lay danh sach user tu cac trang khac
  getListFromPage(page: any){
    this.number=page;
    this.subManage=this.dataService.get(`QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=10`)
    .subscribe((result:any)=>{

      //Sap xep theo ten tai khoan
      this.listUserPaging= result.items.sort((a: any, b: any) => (a.taiKhoan > b.taiKhoan) ? 1 : -1);

    })
  }

  //Search user
  searchUser(keyword :any){
    if(keyword){
      this.dataService.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`).subscribe((result:any)=>{
        this.listUserPaging=result;
      })
    }else{
      this.getListFromPage(this.number);
    }
  }

  addUser(user:any){
    user.maLoaiNguoiDung = "HV";
    user.maNhom="GP01";
    this.dataService.post("QuanLyNguoiDung/ThemNguoiDung",user).subscribe((result)=>{
      console.log(result);
      if (result) {
        this.router.navigateByUrl('/admin/dashboard', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admin/user-manage']);
      });
      }
    })
  }
  //Lay danh sach khoa hoc user chua ghi danh va danh sach Cho phe duyet, da dc duyet
  getListCourseUser(value:string){
    this.username=value;
    this.dataService.post(`/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${value}`,value).subscribe((result:any)=>{
      this.userCourseList= result;
      //console.log(this.username, this.userCourseList);
    })
    this.getWaitingList(value);
    this.getConfirmedList(value);
  }

    //Lay danh sach khoa hoc cho duyet
    getWaitingList(user: string){
      const obj: any ={
        taiKhoan : user
      };
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',obj).subscribe((result:any)=>{
        this.listWaiting=result;
      })
    }
    //Lay danh sach d xet duyet
    getConfirmedList(user: string){
      const obj: any ={
        taiKhoan : user
      };
      this.dataService.post('QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',obj).subscribe((result:any)=>{
        this.listConfirmed= result;
      })
    }

    //Delete User
    deleteUser(TaiKhoan: string){
      console.log(TaiKhoan);
      this.dataService.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${TaiKhoan}`).subscribe();
      this.getListFromPage(this.number);
    }

    //Lay thong tin user can Edit
    getUserEdit(taiKhoan: any){
      let user = {
        taiKhoan: taiKhoan,
        matKhau : ""
      }
      this.dataService.post(`QuanLyNguoiDung/ThongTinTaiKhoan`,user).subscribe((result:any)=>{
        this.userEdit=result;
      })
    }
    ngOnDestroy(){
      this.subManage.unsubscribe();
    }
}
