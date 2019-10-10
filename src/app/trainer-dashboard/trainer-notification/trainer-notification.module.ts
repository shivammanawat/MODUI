import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerNotificationRoutingModule } from './trainer-notification-routing.module';
import { TrainerNotificationComponent } from './trainer-notification.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    TrainerNotificationComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    TrainerNotificationRoutingModule
  ]
})
export class TrainerNotificationModule { }


