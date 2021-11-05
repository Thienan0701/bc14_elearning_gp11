import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  login(user: any){
    console.log(user);
    this.dataService.loginUser(user).subscribe((result)=>{
      console.log(result);
    })
  }

}
