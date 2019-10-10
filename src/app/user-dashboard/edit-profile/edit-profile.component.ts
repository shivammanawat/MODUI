import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {
  paramId:number;
  model: any;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private messageService :MessageService
  ) {}

  ngOnInit() {
    this.getParamData();
    this.getById();
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
      .updateUserProfileById(this.paramId, this.model)
      .subscribe(data => {
        this.messageService.add({
          severity: "success",
          detail: "Profile Updated Successfully"
        });
        this.router.navigateByUrl("user-dashboard/profile");
      });
  }
}

