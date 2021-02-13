import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatedashboardComponent } from './createdashboard/createdashboard.component';
import { EditdashboardComponent } from './editdashboard/editdashboard.component';
import { HexagondemoComponent } from './hexagondemo/hexagondemo.component';
import { MaterialImportModuleModule } from 'src/app/material-import-module/material-import-module.module';
// import { Ng2OdometerModule } from 'ng2-odometer';



@NgModule({
  declarations: [DashboardComponent, 
    CreatedashboardComponent, 
    EditdashboardComponent, 
    HexagondemoComponent],
  imports: [
    CommonModule,
    MaterialImportModuleModule,
    // Ng2OdometerModule.forRoot()
  ]
})
export class DashboardModule { }
