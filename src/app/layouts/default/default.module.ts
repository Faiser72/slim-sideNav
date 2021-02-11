import { HeaderComponent } from './header/header.component';
import { MaterialImportModuleModule } from './../../material-import-module/material-import-module.module';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/ng-module";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent 
  
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MaterialImportModuleModule,
    FlexLayoutModule
  ],
})
export class DefaultModule { }
