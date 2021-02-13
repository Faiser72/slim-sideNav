import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageinstituteadmin',
  templateUrl: './manageinstituteadmin.component.html',
  styleUrls: ['./manageinstituteadmin.component.scss']
})
export class ManageinstituteadminComponent implements OnInit {

  InstituteDetails = [
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
  ];

  gridView: boolean = true;
  listView: boolean = false;

  selectedInstituteName: any;
  selectedInstituteId: any;
  displayInstituteAdminDetails: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  grid() {
    this.listView = false;
    this.gridView = true
  }

  list() {
    this.listView = true;
    this.gridView = false;
  }

  instituteObject(instituteDetails) {
    this.selectedInstituteId = instituteDetails.instituteId;
    this.selectedInstituteName = instituteDetails.instituteName;
    this.displayInstituteAdminDetails = true;
  }

  applyFilter(data){

  }

  routeToViewInstituteAdmin() {
    this.route.navigate(['home/viewinstituteadmin'])
  }

  routeToEditInstituteAdmin() {
    this.route.navigate(['home/editinstituteadmin'])
  }
}
