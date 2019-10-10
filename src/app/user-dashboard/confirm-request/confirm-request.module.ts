import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmRequestRoutingModule } from './confirm-request-routing.module';
import { ConfirmRequestComponent } from './confirm-request.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [ConfirmRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ConfirmRequestRoutingModule
  ]
})
export class ConfirmRequestModule { }
