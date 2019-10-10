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

  edit:number;

  skillById:object;
  name1:string;
  fees1:number;
  toc1:string;
  prerequisites1:string;

  constructor(private fb: FormBuilder, private auth: AuthService,private messageService:MessageService) { }

  ngOnInit() {
    this.techAdd = this.fb.group({
      name: ['', [Validators.required]],
      toc: ['', [Validators.required]],
      prerequisites: ['', [Validators.required]],
      fees: ['',[Validators.required]]
    });

    this.getAllSkills();
  }

  getAllSkills() {
    this.auth.getAllSkills().subscribe(data => {
      console.log(data);
      this.skillData = data;
    });
  }

  editSkill(id){
    this.edit=id;
    this.auth.getSkillById(id).subscribe(data=>{
      this.skillById=data;
      this.name1 =this.skillById['name'],
      this.toc1=this.skillById['toc'],
      this.prerequisites1=this.skillById['prerequisites'],
      this.fees1=this.skillById['fees']      
    });
  }

  
saveSkill(id)
{
  this.auth.getSkillById(id).subscribe(data=>{
    var result={
      name:this.name1,
      fees:this.fees1,
      toc:this.toc1,
      prerequisites:this.prerequisites1
    }     
    console.log(result); 
    this.auth.editSkillById(id,result).subscribe(data=>{
      console.log("success");
      this.getAllSkills();
    })
  });
  this.edit=0; 
}

  removeTech(id) {
    this.auth.DeleteSkillById(id).subscribe(data => {
      this.techInfo = data;
      this.messageService.add({
        severity: "error",
        detail: "Skill Removed"
      });
      this.getAllSkills();
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
      this.getAllSkills();
    });

  }

}
