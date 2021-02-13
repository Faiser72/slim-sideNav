import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-manageinstitute',
  templateUrl: './manageinstitute.component.html',
  styleUrls: ['./manageinstitute.component.scss']
})
export class ManageinstituteComponent implements OnInit {


  dataSource: any;
  // displayedColumns: string[] = [
  //   "slNo",
  //   "instituteName",
  //   "emailId",
  //   "phoneNo",
  //   "dateOfJoiningExamOwl",
  //   "address",
  //   "action"
  // ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: Router) { }
  PeriodicElement: any;
  displayedColumns = ['draftDate', 'name', 'noMissingKey', 'status'];

  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any;


  ngOnInit() {


    this.PeriodicElement = [
      { draftDate: "1-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'H' },
      { draftDate: "2-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'He' },
      { draftDate: "2-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'Li' },
      { draftDate: "3-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'Be' },
      { draftDate: "4-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'B' },
      { draftDate: "5-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'C' },
      { draftDate: "6-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'N' },
      { draftDate: "7-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'O' },
      { draftDate: "8-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'F' },
      { draftDate: "9-02-2021", name: 'Institute Name', noMissingKey: 10, symbol: 'Ne' },
    ];
    this.dataSource = this.PeriodicElement;
    this.data = this.PeriodicElement;
    this.dataSource.paginator = this.paginator;
    this.data.paginator = this.paginator;


    for (var i = 0; i < this.PeriodicElement.length; i++) {
      let x = 'toggle-two' + i;
      $(function () {
        $('#' + x).bootstrapToggle({
          on: 'Actice',
          off: 'Disabled'
        });
      })
    }

    console.log(this.PeriodicElement);

  }



  addColumn(column) {
    // const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    // console.log(randomColumn);
    this.columnsToDisplay.push(column);
  }

  // remove(column, i){
  //   console.log(i,column);


  // }

  remove(fruit: string): void {
    console.log(fruit);

    const index = this.columnsToDisplay.indexOf(fruit);

    if (index >= 0) {
      this.columnsToDisplay.splice(index, 1);
    }
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
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


  routeTOViewInstitute() {
    this.route.navigate(['home/viewinstitute'])
  }

  routeTOEditInstitute() {
    this.route.navigate(['home/editinstitute'])
  }
}
