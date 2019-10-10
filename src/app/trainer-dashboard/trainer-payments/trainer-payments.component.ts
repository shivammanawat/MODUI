import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as _ from 'underscore';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-trainer-payments',
  templateUrl: './trainer-payments.component.html',
  styleUrls: ['./trainer-payments.component.css']
})
export class TrainerPaymentsComponent implements OnInit {

  paymentSuccess: any;
  paymentFoundData : any;
  lid: number;
  constructor(private auth: AuthService,private messageService:MessageService) {}

  ngOnInit() {
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);
    this.getPaymentData();
  }

  getPaymentData() {
    this.auth.getAllPayment().subscribe(data => {
      this.paymentFoundData = data;
      this.paymentSuccess = _.where(this.paymentFoundData,{trainerId:this.lid})
      console.log(this.paymentSuccess);
    });
  }

  Withdraw()
  {
    this.messageService.add({
      severity: "success",
      detail: "Money Withdraw Successfully"
    });
  }
}
