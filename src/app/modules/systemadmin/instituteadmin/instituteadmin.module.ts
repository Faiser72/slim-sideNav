import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageinstituteadminComponent } from './manageinstituteadmin/manageinstituteadmin.component';
import { AddinstituteadminComponent } from './addinstituteadmin/addinstituteadmin.component';
import { ViewInstituteAdminComponent } from './view-institute-admin/view-institute-admin.component';
import { EditInstituteAdminComponent } from './edit-institute-admin/edit-institute-admin.component';
import { MatButtonModule, MatRadioModule } from '@angular/material';
import { ManageteacherComponent } from './teacher/manageteacher/manageteacher.component';
import { EditteacherComponent } from './teacher/editteacher/editteacher.component';
import { ViewteacherComponent } from './teacher/viewteacher/viewteacher.component';
import { AddteacherComponent } from './teacher/addteacher/addteacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { EditstudentComponent } from './student/editstudent/editstudent.component';
import { ManagestudentComponent } from './student/managestudent/managestudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { AddkeysComponent } from './keys/addkeys/addkeys.component';
import { EditkeysComponent } from './keys/editkeys/editkeys.component';
import { ManagekeysComponent } from './keys/managekeys/managekeys.component';
import { ViewkeysComponent } from './keys/viewkeys/viewkeys.component';
import { MaterialImportModuleModule } from 'src/app/material-import-module/material-import-module.module';
import { UploadInstituteAdminComponent } from './upload-institute-admin/upload-institute-admin.component';
import { UploadTeachersComponent } from './teacher/upload-teachers/upload-teachers.component';
import { DraftTeachersComponent } from './teacher/draft-teachers/draft-teachers.component';
import { UploadStudentComponent } from './student/upload-student/upload-student.component';
import { DraftStudentComponent } from './student/draft-student/draft-student.component';
import { UploadKeysComponent } from './keys/upload-keys/upload-keys.component';



@NgModule({
  declarations: [ManageinstituteadminComponent,
    AddinstituteadminComponent,
    ViewInstituteAdminComponent,
    EditInstituteAdminComponent,
    AddteacherComponent,
    ManageteacherComponent,
    EditteacherComponent,
    ViewteacherComponent,
    AddstudentComponent,
    EditstudentComponent,
    ManagestudentComponent,
    ViewstudentComponent,
    AddkeysComponent,
    EditkeysComponent,
    ManagekeysComponent,
    ViewkeysComponent,
    UploadInstituteAdminComponent,
    UploadTeachersComponent,
    DraftTeachersComponent,
    UploadStudentComponent,
    DraftStudentComponent,
    UploadKeysComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class InstituteadminModule { }
