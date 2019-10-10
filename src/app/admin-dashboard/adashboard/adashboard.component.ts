import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {

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
