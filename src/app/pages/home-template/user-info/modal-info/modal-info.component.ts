import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DataService } from '@services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  @Input() username: any;
  @Input() password: any;
  @Input() fullname: any;
  @Input() phonenumber: any;
  @Input() email: any;

  ngOnInit(): void {
  }

  edit(info: any){
    const userInfo: any = localStorage.getItem('UserAdmin');
    info.maLoaiNguoiDung= JSON.parse(userInfo).maLoaiNguoiDung;
    info.maNhom= "GP01";
    console.log(info);
    this.dataservice.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",info).subscribe((result:any)=>{
      if (result) {
        this.router.navigate(['/user-info']).then(()=>window.location.reload())
      }
    })
  }

}
