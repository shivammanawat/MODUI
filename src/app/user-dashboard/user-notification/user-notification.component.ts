import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { Router } from "@angular/router";
import * as moment from "moment";
import { MessageService } from 'primeng/api';
@Component({
  selector: "app-user-notification",
  templateUrl: "./user-notification.component.html",
  styleUrls: ["./user-notification.component.css"]
})
export class UserNotificationComponent implements OnInit {
  acceptedTrainings: any;
  allData: any;
  rejectedTrainings: any;
  pendingRequest: any;
  lid: any;
  paymentSuccess: any;
  paymentData: any;
  compareStartDate: any;
  compareStartDate1: any;
  checkStartDate: Date;
  checkEndDate: Date;

  constructor(private auth: AuthService, public router: Router,private messageService : MessageService) {}

  ngOnInit() {
    console.log("in ng");
    this.getRequestStatus();
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
  
  }

  getRequestStatus() {
    console.log("in status");
    this.auth.getAllTraining().subscribe(data => {
      this.allData = data;

      this.pendingRequest = _.where(this.allData, {
        rejectNotify: false,
        accept: false,
        userId: this.lid
      });
      
      this.acceptedTrainings = _.where(this.allData, {
        rejectNotify: false,
        accept: true,
        userId: this.lid
      });

      this.rejectedTrainings = _.where(this.allData, {
        rejectNotify: true,
        accept: false,
        userId: this.lid
      });

    });
  }

  startTraining(id) {
    this.auth.getTrainingById(id).subscribe(data => {
      this.compareStartDate1 = data;

      this.checkStartDate = this.compareStartDate1.startDate;

      this.checkEndDate = this.compareStartDate1.endDate;

      let checkDate1 = moment(this.checkStartDate).format("DD-MM-YYYY");

      let checkDate2 = moment(this.checkEndDate).format("DD-MM-YYYY");

      let now = moment().format("DD-MM-YYYY");

      if (now > checkDate2) {
        this.messageService.add({
          severity: "error",
          detail: "Training Period is over"
        });
      } else {
        if (checkDate1 <= now) {
          this.auth.updateTrainingStatusById(id).subscribe(data => {
            console.log(data);
          });
          this.messageService.add({
            severity: "success",
            detail: "Training started check Current Training"
          });
        } else {
          alert("yet to start");
          this.messageService.add({
            severity: "success",
            detail: "Training yet to start"
          });
        }
      }
    });

  }

  payment(id) {
    let data = {
      trainingId: id
    };
    this.router.navigate(["user-dashboard/payment"], {
      queryParams: data
    });
  }
}
