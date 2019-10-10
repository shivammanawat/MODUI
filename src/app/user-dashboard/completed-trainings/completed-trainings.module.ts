import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedTrainingsRoutingModule } from './completed-trainings-routing.module';
import { CompletedTrainingsComponent } from './completed-trainings.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [CompletedTrainingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CompletedTrainingsRoutingModule
  ]
})
export class CompletedTrainingsModule { }
