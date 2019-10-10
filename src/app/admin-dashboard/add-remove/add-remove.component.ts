import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {
  techAdd: FormGroup;
  submitted = false;
  techInfo: String;
  skillData: Object;
  constructor(private fb: FormBuilder, private auth: AuthService,private messageService:MessageService) { }

  ngOnInit() {
    this.techAdd = this.fb.group({
      name: ['', [Validators.required]],
      toc: ['', [Validators.required]],
      prerequisites: ['', [Validators.required]],
      fees: ['',[Validators.required]]
    });

    this.getAllSkillslogy();
  }

  getAllSkillslogy() {
    this.auth.getAllSkills().subscribe(data => {
      console.log(data);
      this.skillData = data;
    });
  }

  removeTech(id) {
    this.auth.DeleteSkillById(id).subscribe(data => {
      this.techInfo = data;
      this.messageService.add({
        severity: "error",
        detail: "Skill Removed"
      });
      this.getAllSkillslogy();
    })
  }

  addingTechnology() {
    this.submitted = true;
    if (this.techAdd.invalid) {
      return;
    }
    this.auth.saveSkill(this.techAdd.value).subscribe(data => {
      this.messageService.add({
        severity: "success",
        detail: "Skill Added"
      });
      this.techInfo = data;
      this.getAllSkillslogy();
    });

  }

}
