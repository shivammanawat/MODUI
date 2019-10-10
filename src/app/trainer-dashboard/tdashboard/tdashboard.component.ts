import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tdashboard',
  templateUrl: './tdashboard.component.html',
  styleUrls: ['./tdashboard.component.css']
})

export class TdashboardComponent implements OnInit {
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
