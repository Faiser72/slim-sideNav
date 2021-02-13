import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managekeys',
  templateUrl: './managekeys.component.html',
  styleUrls: ['./managekeys.component.scss']
})
export class ManagekeysComponent implements OnInit {

  keysDetails = [
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
    { value: 'pen', viewValue: 'Pen' },
    { value: 'pencil', viewValue: 'Pencil' },
    { value: 'bulb', viewValue: 'Bulb' },
  ];

  gridView:boolean=true;
  listView:boolean=false;

  dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "typeOFKey",
    "description",
    "action"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  customFilter() {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.patientNumber.patientNumber + data.doctorName.doctorName + data.patientName + data.phoneNumber + data.appointmentDate + data.appointmentTime;
      return dataStr.trim().toLowerCase().indexOf(filter) != -1;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  grid(){
    this.listView=false;
    this.gridView=true
  }

  list(){
    this.listView=true;
    this.gridView=false;
  }

  routeToViewKey() {
    this.route.navigate(['home/viewkeys'])
  }

  routeToEditKey() {
    this.route.navigate(['home/editkeys'])
  }

}
