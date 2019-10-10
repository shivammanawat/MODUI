import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
import { MessageService } from 'primeng/api';
@Component({
  selector: "app-add-block",
  templateUrl: "./add-block.component.html",
  styleUrls: ["./add-block.component.css"]
})
export class AddBlockComponent implements OnInit {
  users: Object;
  mentors: Object;
  allUsers: any;
  showBlock: Boolean;
  showUnBlock: Boolean;
  constructor(private auth: AuthService,private messageService:MessageService) {}

  ngOnInit() {
    this.getAllRegistereds();
  }

  onGetUser() {
    this.users = _.where(this.allUsers, { role: 3 });
    this.mentors = _.where(this.allUsers, { role: 2 });
    console.log(this.mentors);
  }

  getAllRegistereds() {
    this.auth.getAllRegistered().subscribe(data => {
      this.allUsers = data;
      this.onGetUser();
    });
  }

  block(id) {
    /* this.showUnBlock = true;
    this.showBlock = false; */
    this.auth.blockById(id).subscribe(data => {
      this.messageService.add({
        severity: "error",
        detail: "Account Blocked"
      });
      this.getAllRegistereds();
    });
  }
  unBlock(id) {
    /* this.showBlock = true;
    this.showUnBlock = false; */
    this.auth.unBlockById(id).subscribe(data => {
      this.messageService.add({
        severity: "success",
        detail: "Account Unblocked"
      });
      this.getAllRegistereds();
    });
  }
}
