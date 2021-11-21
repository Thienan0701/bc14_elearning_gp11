
import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  listUserPaging: any = [];



  //Phan trang
  pagenums:any = [];
  number : number = 1;
  maxpage: number = 0;
  soTrang: any;

  constructor(private dataService: DataService, private router:Router) { }
  ngOnInit(): void {
    this.getListUserPaging();

  }

  getListUserPaging(){
    this.dataService.get("QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=1&pageSize=10")
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
    this.dataService.get(`QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=10`)
    .subscribe((result:any)=>{

      //Sap xep theo ten tai khoan
      this.listUserPaging= result.items.sort((a: any, b: any) => (a.taiKhoan > b.taiKhoan) ? 1 : -1);

    })
  }

  //Search user
  searchUser(keyword :any){
    this.dataService.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`).subscribe((result:any)=>{
      this.listUserPaging=result;
    })
    // this.listUserPaging = this.listUserPaging.filter((user:any) => {
    //   return user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    // });
    // console.log(this.listUserPaging);


  }

  addUser(user:any){
    user.maLoaiNguoiDung = "HV";
    user.maNhom="GP01";
    this.dataService.post("QuanLyNguoiDung/ThemNguoiDung",user).subscribe((result)=>{
      console.log(result);
      if (result) {
        this.router.navigate(['/admin/user-manage']).then(()=>window.location.reload());
      }
    })
  }
}
