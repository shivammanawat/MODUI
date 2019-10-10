import { Component, OnInit } from "@angular/core";
import * as _ from "underscore";
import { AuthService } from "src/app/shared/services/auth.service";
import { ConnectableObservable } from "rxjs";
import { MessageService } from 'primeng/api';
@Component({
  selector: "app-trainer-notification",
  templateUrl: "./trainer-notification.component.html",
  styleUrls: ["./trainer-notification.component.css"]
})
export class TrainerNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  yourRejection: any;
  pendingApproval: any;
  lid: any;
  constructor(private auth: AuthService,private messageService:MessageService) {}

  ngOnInit() {
    console.log("in ng");
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);
    this.getRequestStatus();
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTraining().subscribe(data => {
      console.log(data);
      this.allData = data;
      this.pendingApproval = _.where(this.allData, {
        rejectNotify: false,
        accept: false,
        mentorId: this.lid
      });
      console.log(this.pendingApproval);
      this.acceptedTrainings = _.where(this.allData, {
        rejectNotify: false,
        accept: true,
        mentorId: this.lid
      });
      console.log(this.acceptedTrainings);
      this.yourRejection = _.where(this.allData, {
        rejectNotify: true,
        accept: false,
        mentorId: this.lid
      });
    });
  }

  acceptInvite(id) {
    this.auth.acceptTrainingRequestById(id).subscribe(data => {
      console.log(data);
  
      this.messageService.add({
        severity: "error",
        detail: "Request Accepted"
      });
      this.getRequestStatus();
    });
  }
  rejectInvite(id) {
    this.auth.rejectTrainingRequestById(id).subscribe(data => {
      console.log(data);
      
      this.messageService.add({
        severity: "success",
        detail: "Request Rejected"
      });
      this.getRequestStatus();
    });
  }
}
