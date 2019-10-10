import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
