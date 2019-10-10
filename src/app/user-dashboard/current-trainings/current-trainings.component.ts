import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-current-trainings",
  templateUrl: "./current-trainings.component.html",
  styleUrls: ["./current-trainings.component.css"]
})
export class CurrentTrainingsComponent implements OnInit {
  curT: any;
  curT1: any;
  progress:number;
  model:any;
  lid: number;

  constructor(public auth: AuthService,private messageService:MessageService) {}

   
  ngOnInit() {
    let localid = localStorage.getItem("lid");

    this.lid = +localid;
    console.log(this.lid);
    this.getCurrentTraining();
  }

  getCurrentTraining() {
    this.auth.getAllTraining().subscribe(data => {
      this.curT1 = data;
      this.curT = _.where(this.curT1, { status: "current", userId:this.lid });
      console.log(this.curT);
    });
  }

  getProgress(id)
  {
    this.auth.getTrainingById(id).subscribe(data => {
      this.model = data;
      console.log(this.model);
    });
    
  }


  updateProgress(id) {
    this.auth.updateTrainingProgress(id,this.model.progress).subscribe(data => {
      this.messageService.add({
        severity: "success",
        detail: "Progress Updated to" + this.model.progress
      });
        this.getCurrentTraining();
    });


  }
}
