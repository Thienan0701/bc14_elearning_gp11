import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-modal-edit-course',
  templateUrl: './modal-edit-course.component.html',
  styleUrls: ['./modal-edit-course.component.scss']
})
export class ModalEditCourseComponent implements OnInit {

  @Input() courseEdit:any;
  @Input() listDanhmuc:any;

  fileToUpload: any;

  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  editImg(img:any){
    this.data.post('QuanLyKhoaHoc/CapNhatKhoaHocUpload',img).subscribe();
  }



  handleFileInput($event:any) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.fileToUpload = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  editCourse(value:any){
    value.maKhoaHoc=this.courseEdit.maKhoaHoc;
    value.danhGia=0;

    value.maNhom="GP01";
    value.ngayTao=this.courseEdit.ngayTao;
    value.taiKhoanNguoiTao=this.courseEdit.nguoiTao.taiKhoan;

    console.log(value);
    this.editImg(this.fileToUpload);
    this.data.put('QuanLyKhoaHoc/CapNhatKhoaHoc',value).subscribe((result:any)=>{
      if (result) {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/admin/course-manage']);
      });
      }
    });

  }

}
