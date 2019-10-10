import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerPaymentsRoutingModule } from './trainer-payments-routing.module';
import { TrainerPaymentsComponent } from './trainer-payments.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [TrainerPaymentsComponent],
  imports: [
    CommonModule,
    ToastModule,
    TrainerPaymentsRoutingModule
  ]
})
export class TrainerPaymentsModule { }
