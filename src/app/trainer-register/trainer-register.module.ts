import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrainerRegisterRoutingModule } from "./trainer-register-routing.module";
import { TrainerRegisterComponent } from "./trainer-register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [TrainerRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, TrainerRegisterRoutingModule, ToastModule]
})
export class TrainerRegisterModule {}