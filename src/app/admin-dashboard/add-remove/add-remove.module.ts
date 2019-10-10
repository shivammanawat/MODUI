import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRemoveRoutingModule } from './add-remove-routing.module';
import { AddRemoveComponent } from './add-remove.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [AddRemoveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    AddRemoveRoutingModule
  ]
})
export class AddRemoveModule { }
