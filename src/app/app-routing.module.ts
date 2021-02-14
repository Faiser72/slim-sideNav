import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AddinstituteComponent } from './modules/systemadmin/institute/addinstitute/addinstitute.component';
import { DraftInstituteComponent } from './modules/systemadmin/institute/draft-institute/draft-institute.component';
import { EditInstituteComponent } from './modules/systemadmin/institute/edit-institute/edit-institute.component';
import { ManageinstituteComponent } from './modules/systemadmin/institute/manageinstitute/manageinstitute.component';
import { UploadInstituteComponent } from './modules/systemadmin/institute/upload-institute/upload-institute.component';
import { ViewInstituteComponent } from './modules/systemadmin/institute/view-institute/view-institute.component';
import { AddinstituteadminComponent } from './modules/systemadmin/instituteadmin/addinstituteadmin/addinstituteadmin.component';
import { EditInstituteAdminComponent } from './modules/systemadmin/instituteadmin/edit-institute-admin/edit-institute-admin.component';
import { AddkeysComponent } from './modules/systemadmin/instituteadmin/keys/addkeys/addkeys.component';
import { EditkeysComponent } from './modules/systemadmin/instituteadmin/keys/editkeys/editkeys.component';
import { ManagekeysComponent } from './modules/systemadmin/instituteadmin/keys/managekeys/managekeys.component';
import { UploadKeysComponent } from './modules/systemadmin/instituteadmin/keys/upload-keys/upload-keys.component';
import { ViewkeysComponent } from './modules/systemadmin/instituteadmin/keys/viewkeys/viewkeys.component';
import { ManageinstituteadminComponent } from './modules/systemadmin/instituteadmin/manageinstituteadmin/manageinstituteadmin.component';
import { AddstudentComponent } from './modules/systemadmin/instituteadmin/student/addstudent/addstudent.component';
import { DraftStudentComponent } from './modules/systemadmin/instituteadmin/student/draft-student/draft-student.component';
import { EditstudentComponent } from './modules/systemadmin/instituteadmin/student/editstudent/editstudent.component';
import { ManagestudentComponent } from './modules/systemadmin/instituteadmin/student/managestudent/managestudent.component';
import { UploadStudentComponent } from './modules/systemadmin/instituteadmin/student/upload-student/upload-student.component';
import { ViewstudentComponent } from './modules/systemadmin/instituteadmin/student/viewstudent/viewstudent.component';
import { AddteacherComponent } from './modules/systemadmin/instituteadmin/teacher/addteacher/addteacher.component';
import { DraftTeachersComponent } from './modules/systemadmin/instituteadmin/teacher/draft-teachers/draft-teachers.component';
import { EditteacherComponent } from './modules/systemadmin/instituteadmin/teacher/editteacher/editteacher.component';
import { ManageteacherComponent } from './modules/systemadmin/instituteadmin/teacher/manageteacher/manageteacher.component';
import { UploadTeachersComponent } from './modules/systemadmin/instituteadmin/teacher/upload-teachers/upload-teachers.component';
import { ViewteacherComponent } from './modules/systemadmin/instituteadmin/teacher/viewteacher/viewteacher.component';
import { UploadInstituteAdminComponent } from './modules/systemadmin/instituteadmin/upload-institute-admin/upload-institute-admin.component';
import { ViewInstituteAdminComponent } from './modules/systemadmin/instituteadmin/view-institute-admin/view-institute-admin.component';


const routes: Routes = [{
  path: "", component: DefaultComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },

    // instute starts here
    { path: "addinstitute", component: AddinstituteComponent },
    { path: "manageinstitute", component: ManageinstituteComponent },
    { path: "viewinstitute", component: ViewInstituteComponent },
    { path: "editinstitute", component: EditInstituteComponent },
    { path: "draftinstitute", component: DraftInstituteComponent },
    { path: "uploadtinstitute", component: UploadInstituteComponent },


    // instute ends here

    // instuteAdmin starts  here
    { path: "addinstituteadmin", component: AddinstituteadminComponent },
    { path: "manageinstituteadmin", component: ManageinstituteadminComponent },
    { path: "viewinstituteadmin", component: ViewInstituteAdminComponent },
    { path: "editinstituteadmin", component: EditInstituteAdminComponent },
    { path: "uploadinstituteadmin", component: UploadInstituteAdminComponent },
    // instuteAdmin ends  here

    // Teacher Starts here
    { path: "addteacher", component: AddteacherComponent },
    { path: "manageteacher", component: ManageteacherComponent },
    { path: "viewteacher", component: ViewteacherComponent },
    { path: "editteacher", component: EditteacherComponent },
    { path: "draftteacher", component: DraftTeachersComponent },
    { path: "uploadteacher", component: UploadTeachersComponent },
    // Teacher Ends here

    // Student Starts here
    { path: "addstudent", component: AddstudentComponent },
    { path: "managestudent", component: ManagestudentComponent },
    { path: "viewstudent", component: ViewstudentComponent },
    { path: "editstudent", component: EditstudentComponent },
    { path: "draftstudent", component: DraftStudentComponent },
    { path: "uploadstudent", component: UploadStudentComponent },

    // Student Ends here

    // Keys Starts here
    { path: "addkeys", component: AddkeysComponent },
    { path: "managekeys", component: ManagekeysComponent },
    { path: "viewkeys", component: ViewkeysComponent },
    { path: "editkeys", component: EditkeysComponent },
    { path: "uploadkeys", component: UploadKeysComponent },
    // Keys Ends here

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
