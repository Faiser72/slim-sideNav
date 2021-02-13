import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteModule } from './institute/institute.module';
import { InstituteadminModule } from './instituteadmin/instituteadmin.module';
import { InstitutenewModule } from './institutenew/institutenew.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstituteModule,
    InstituteadminModule,
    InstitutenewModule
  ]
})
export class SystemadminModule { }
