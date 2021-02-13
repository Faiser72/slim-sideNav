import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-institute',
  templateUrl: './view-institute.component.html',
  styleUrls: ['./view-institute.component.scss']
})
export class ViewInstituteComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  routeTOEditInstitute() {
    this.route.navigate(['home/editinstitute'])
  }

}
