import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddinstitutenewComponent } from './addinstitutenew/addinstitutenew.component';
import { EditinstitutenewComponent } from './editinstitutenew/editinstitutenew.component';
import { ManageinstitutenewComponent } from './manageinstitutenew/manageinstitutenew.component';



@NgModule({
  declarations: [AddinstitutenewComponent, EditinstitutenewComponent, ManageinstitutenewComponent],
  imports: [
    CommonModule
  ]
})
export class InstitutenewModule { }
