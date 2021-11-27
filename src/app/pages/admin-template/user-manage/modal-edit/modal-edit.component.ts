import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '@services/data.service';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {


  @Input() userEdit : any;
  @Input() listType: any ;
  constructor(private dataservice:DataService, private router : Router) { }

  ngOnInit(): void {

  }
  edit(value: any){
    value.maNhom = this.userEdit.maNhom;
    value.taiKhoan = this.userEdit.taiKhoan;

    this.dataservice.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",value).subscribe((result:any)=>{
      if (result) {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admin/user-manage']);
      });
      }
    });
  }

  setInputValue(type : any){
    this.userEdit.maLoaiNguoiDung = type.maLoaiNguoiDung;
  }

}
