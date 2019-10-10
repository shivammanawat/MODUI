import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingsRoutingModule } from './current-trainings-routing.module';
import { CurrentTrainingsComponent } from './current-trainings.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [CurrentTrainingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CurrentTrainingsRoutingModule
  ]
})
export class CurrentTrainingsModule { }
