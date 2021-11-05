import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {tap, catchError} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getListCourse() : Observable<any>{
    const url = "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
    // const observable =
    return this.http.get(url).pipe(
      tap(()=>{}),
      catchError((error: any)=>{
        return this.handleErrors(error);
      })
    )
    // return observable;
  }

  getDetailCourse(id: any): Observable<any>{
    const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    return this.http.get(url).pipe(
      tap(()=>{}),
      catchError((error: any)=>{
        return this.handleErrors(error);
      })
    )
  }

  registerUser(user: any): Observable<any> {
    const url = `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`
    return this.http.post(url, user).pipe(
      tap(()=>{}),
      catchError((error: any)=>{
        return this.handleErrors(error);
      })
    )
  }

  loginUser(user: any): Observable<any> {
    const url = "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap"
    return this.http.post(url, user).pipe(
      tap(()=>{}),
      catchError((error: any)=>{
        return this.handleErrors(error);
      })
    )
  }
  handleErrors(error: any) {
    switch (error.status) {
      case 300:
        break;
      case 400:
        break;
      default:
        break;
    }
    return throwError(error);
  }
}
