import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { getSearchDataRoutingModule } from './search-trainings-routing.module';
import { getSearchDataComponent } from './search-trainings.component';
import { FormsModule } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [getSearchDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    getSearchDataRoutingModule
  ]
})
export class getSearchDataModule { }
