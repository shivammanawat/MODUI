import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-trainer-edit-profile",
  templateUrl: "./trainer-edit-profile.component.html",
  styleUrls: ["./trainer-edit-profile.component.css"]
})
export class TrainerEditProfileComponent implements OnInit {
  paramId: number;
  model: any;
  skillData:any;
  
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private messageService:MessageService
  ) {}

  ngOnInit() {
    this.getParamData();
    this.getById();
    this.getAllSkills();
  }

  getAllSkills() {
    this.auth.getAllSkills().subscribe(data => {
      console.log(data);
      this.skillData = data;
    });
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      let pid = params["id"];
      this.paramId = +pid;
      console.log("param id " + this.paramId);
    });
  }

  getById() {
    this.auth.getUserById(this.paramId).subscribe(data => {
      this.model = data;
    });
  }

  onSubmit() {
    this.auth
      .updateTrainerProfileById(this.paramId, this.model)
      .subscribe(data => {
        
        this.messageService.add({
          severity: "success",
          detail: "Profile Updated Successfully"
        });

        this.router.navigateByUrl("trainer-dashboard/trainer-profile");
      });
  }
}
