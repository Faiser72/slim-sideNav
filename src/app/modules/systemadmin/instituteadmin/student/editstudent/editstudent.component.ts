import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {

  editStudentDetailsForm: FormGroup;
  // phonePattern = "^[0-9_-]{10}$";
  phonePattern = "^[1-9]{1}[0-9]{9}$";
  minDate: any;
  maxDate: any;

  age: number;

  constructor(private fb: FormBuilder,
    private appComponent: AppComponent,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {
    // for date validation starts
    var minCurrentDate = new Date();
    var maxNewDate = new Date();
    this.minDate = minCurrentDate;
    this.maxDate = maxNewDate.setMonth(maxNewDate.getMonth() + 1);
    // for date validation ends
  }

  ageFromDateOfBirth(dob){
    
  }

  ngOnInit() {
    this.editStudentDetailsFormBuilder();
  }

  editStudentDetailsFormBuilder() {
    this.editStudentDetailsForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
      dob: [
        null,
        [
          Validators.required
        ],
      ],
      joiningDate: [null, [Validators.required]],
      emailId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$"),
        ]),
      ],
      subject: [null, [Validators.required]],
      class: [null, [Validators.required]],
      avatar: [null],
      rollNo: [null, [Validators.required]],
      classTeacher:[null,[Validators.required]],
      studentUserId: [null, [Validators.required]],
      areaOfInterest: [null],

    });
  }

  editStudentDetailsFormSubmit() {

  }

}

