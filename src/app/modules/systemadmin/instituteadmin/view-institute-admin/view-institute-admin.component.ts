import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-institute-admin',
  templateUrl: './view-institute-admin.component.html',
  styleUrls: ['./view-institute-admin.component.scss']
})
export class ViewInstituteAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  routeToEditInstituteAdmin(){
    this.route.navigate(['home/editinstituteadmin'])
  }

}
