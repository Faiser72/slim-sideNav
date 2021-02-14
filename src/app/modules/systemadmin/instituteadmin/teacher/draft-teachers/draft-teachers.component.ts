import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-teachers',
  templateUrl: './draft-teachers.component.html',
  styleUrls: ['./draft-teachers.component.scss']
})
export class DraftTeachersComponent implements OnInit {

  PeriodicElement: any;
  displayedColumns = ['draftDate', 'name', 'noMissingKey'];
  dataSource
  constructor() {

  }

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

    console.log(this.PeriodicElement);

  }


}
