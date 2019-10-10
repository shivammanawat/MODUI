import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNotificationRoutingModule } from './user-notification-routing.module';
import { UserNotificationComponent } from './user-notification.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [UserNotificationComponent],
  imports: [
    CommonModule,
    ToastModule,
    UserNotificationRoutingModule
  ]
})
export class UserNotificationModule { }
