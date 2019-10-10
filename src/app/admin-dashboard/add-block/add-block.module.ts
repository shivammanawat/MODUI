import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlockRoutingModule } from './add-block-routing.module';
import { AddBlockComponent } from './add-block.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [AddBlockComponent],
  imports: [
    CommonModule,
    AddBlockRoutingModule,
    ToastModule
  ]
})
export class AddBlockModule { }
