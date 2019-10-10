import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-udashboard',
  templateUrl: './udashboard.component.html',
  styleUrls: ['./udashboard.component.css']
})
export class UdashboardComponent implements OnInit {
    username: string;
    id:number;
    alldata:any;
 constructor(private auth:AuthService){}
 ngOnInit()
 {
  let lid = localStorage.getItem('lid');
  this.id = +lid;
  console.log(this.id);
      this.auth.getUserById(this.id).subscribe(data=>
        {
          this.alldata = data;
          this.username = this.alldata.firstName;
          console.log(this.alldata);
        })
 }
 
}
