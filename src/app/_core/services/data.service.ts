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
