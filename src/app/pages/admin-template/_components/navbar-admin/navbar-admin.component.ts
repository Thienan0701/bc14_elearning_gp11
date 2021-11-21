import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  user:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const account: any= localStorage.getItem("UserAdmin");
    this.user= JSON.parse(account).taiKhoan;
  }

  Logout(){
    localStorage.removeItem("UserAdmin");
    this.router.navigate([`/auth`]);
  }

}
