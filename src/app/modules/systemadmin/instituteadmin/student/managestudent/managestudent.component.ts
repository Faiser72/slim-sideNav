import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class ManagestudentComponent implements OnInit {

  // dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "studentName",
    "emailId",
    "phoneNo",
    "class",
    "rollNo",
    "action"
  ];

  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: Router) { }
  PeriodicElement: any;
  // displayedColumns = ['draftDate', 'name', 'noMissingKey', 'status'];

  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any;


  ngOnInit() {


    this.PeriodicElement = [
      { slNo: "1", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "2", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "2", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "3", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "4", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "5", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "6", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "7", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "8", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
      { slNo: "9", studentName: 'Institute studentName', emailId: "someOne@gmail.com", phoneNo: 8147691663, class: 'BTech', rollNo: '131KSB6018' },
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

  routeToViewStudent() {
    this.route.navigate(['home/viewstudent'])
  }

  routeToEditStudent() {
    this.route.navigate(['home/editstudent'])
  }
}
