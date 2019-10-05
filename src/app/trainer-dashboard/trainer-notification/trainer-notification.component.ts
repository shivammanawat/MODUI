
import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { AuthService } from 'src/app/shared/services/auth.service';
import { ConnectableObservable } from 'rxjs';
@Component({
  selector: 'app-trainer-notification',
  templateUrl: './trainer-notification.component.html',
  styleUrls: ['./trainer-notification.component.css']
})
export class TrainerNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  yourRejection:any;
  pendingApproval:any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTrainings().subscribe(data => {
      console.log(data);
      this.allData = data;
      this.pendingApproval = _.where(this.allData,{rejectNotify:false,accept:false,mentorId : 4});
      console.log(this.pendingApproval);
      this.acceptedTrainings = _.where(this.allData,{rejectNotify:false,accept:true,mentorId : 4});
      console.log(this.acceptedTrainings);
      this.yourRejection = _.where(this.allData,{rejectNotify:true,accept:false,mentorId:4 });
     console.log("in rejetc");
      console.log(this.yourRejection);
    });
  }

  acceptInvite(id)
  {
    this.auth.acceptStatus(id).subscribe(data => {
      console.log(data);
      alert("accepted");
      
    this.getRequestStatus();
    });
  }
  rejectInvite(id)
  {
    this.auth.rejectStatus(id).subscribe(data => {
      console.log(data);
     alert("rejected");
     this.getRequestStatus();
    });
  }

}
