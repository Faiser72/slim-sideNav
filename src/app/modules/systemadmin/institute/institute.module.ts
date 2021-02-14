import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddinstituteComponent } from './addinstitute/addinstitute.component';
import { ManageinstituteComponent } from './manageinstitute/manageinstitute.component';
import { ViewInstituteComponent } from './view-institute/view-institute.component';
import { EditInstituteComponent } from './edit-institute/edit-institute.component';
import { MaterialImportModuleModule } from 'src/app/material-import-module/material-import-module.module';
import { DraftInstituteComponent } from './draft-institute/draft-institute.component';
import { UploadInstituteComponent } from './upload-institute/upload-institute.component';



@NgModule({
  declarations: [
    AddinstituteComponent,
    ManageinstituteComponent,
    ViewInstituteComponent,
    EditInstituteComponent,
    DraftInstituteComponent,
    UploadInstituteComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule
  ]
})
export class InstituteModule { }
