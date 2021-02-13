import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.scss']
})
export class ViewteacherComponent implements OnInit {

  addTeacherDetailsForm: FormGroup;
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

  ngOnInit() {
    this.addTeacherDetailsFormBuilder();
  }

  ageFromDateOfBirth(dob){
    
  }

  addTeacherDetailsFormBuilder() {
    this.addTeacherDetailsForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      qualification: [null, [Validators.required]],
      subject: [null, [Validators.required]],
      avatar: [null],
      dob: [
        null,
        [
          Validators.required
        ],
      ],
      teachingSince: [null, [Validators.required]],
      emailId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$"),
        ]),
      ],
      teacherUserId: [null, [Validators.required]],
      experience: [null],
      joiningDate: [null, [Validators.required]],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],

    });
  }

  addTeacherDetailsFormSubmit() {

  }

  routeToEditTeacher() {
    this.router.navigate(['home/editteacher'])
  }
}
