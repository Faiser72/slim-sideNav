import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { AddinstituteComponent } from './modules/systemadmin/institute/addinstitute/addinstitute.component';
import { DraftInstituteComponent } from './modules/systemadmin/institute/draft-institute/draft-institute.component';
import { EditInstituteComponent } from './modules/systemadmin/institute/edit-institute/edit-institute.component';
import { ManageinstituteComponent } from './modules/systemadmin/institute/manageinstitute/manageinstitute.component';
import { ViewInstituteComponent } from './modules/systemadmin/institute/view-institute/view-institute.component';
import { AddinstituteadminComponent } from './modules/systemadmin/instituteadmin/addinstituteadmin/addinstituteadmin.component';
import { EditInstituteAdminComponent } from './modules/systemadmin/instituteadmin/edit-institute-admin/edit-institute-admin.component';
import { ManageinstituteadminComponent } from './modules/systemadmin/instituteadmin/manageinstituteadmin/manageinstituteadmin.component';
import { ViewInstituteAdminComponent } from './modules/systemadmin/instituteadmin/view-institute-admin/view-institute-admin.component';


const routes: Routes = [{
  path: "", component: DefaultComponent,
  children: [
    { path: '', component: DashboardComponent },

    // instute starts here
    { path: "addinstitute", component: AddinstituteComponent },
    { path: "manageinstitute", component: ManageinstituteComponent },
    { path: "viewinstitute", component: ViewInstituteComponent },
    { path: "editinstitute", component: EditInstituteComponent },
    { path: "draftinstitute", component: DraftInstituteComponent },

    // instute ends here

    // instuteAdmin starts  here
    { path: "addinstituteadmin", component: AddinstituteadminComponent },
    { path: "manageinstituteadmin", component: ManageinstituteadminComponent },
    { path: "viewinstituteadmin", component: ViewInstituteAdminComponent },
    { path: "editinstituteadmin", component: EditInstituteAdminComponent },
    // instuteAdmin ends  here

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
