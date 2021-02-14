import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-manageteacher',
  templateUrl: './manageteacher.component.html',
  styleUrls: ['./manageteacher.component.scss']
})
export class ManageteacherComponent implements OnInit {


  // dataSource: any;
  displayedColumns: string[] = [
    "slNo",
    "teacherName",
    "emailId",
    "phoneNo",
    "qualification",
    "experience",
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
      { slNo: "1", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "2", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "2", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "3", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "4", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "5", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "6", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "7", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "8", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
      { slNo: "9", teacherName: 'Institute teacherName', emailId: "someOne@gmail.com", phoneNo: 8147691663, qualification: 'BTech', experience: '2 Years' },
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

  routeTOViewTeacher() {
    this.route.navigate(['home/viewteacher'])
  }

  routeToEditTeacher() {
    this.route.navigate(['home/editteacher'])
  }
}
