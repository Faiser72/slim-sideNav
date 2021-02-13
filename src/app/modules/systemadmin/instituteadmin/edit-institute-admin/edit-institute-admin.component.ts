import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-institute-admin',
  templateUrl: './edit-institute-admin.component.html',
  styleUrls: ['./edit-institute-admin.component.scss']
})
export class EditInstituteAdminComponent implements OnInit {

  isGeneratePassword: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  generatePwd() {
    this.isGeneratePassword = true;
  }

}
