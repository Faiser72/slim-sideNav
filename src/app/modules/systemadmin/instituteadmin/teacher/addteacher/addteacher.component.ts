import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.scss']
})
export class AddteacherComponent implements OnInit {

  addTeacherDetailsForm: FormGroup;
  // phonePattern = "^[0-9_-]{10}$";
  phonePattern = "^[1-9]{1}[0-9]{9}$";
  minDate: any;
  maxDate: any;

  age: number; 
  // files: FileHandle[] = [];

  userId:any="userId123";
  password:any="pass@123"

  // filesDropped(files: FileHandle[]): void {
  //   this.files = files;
  // }

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

   // For drag and drop starts here
   files: any[] = [];

   /**
    * on file drop handler
    */
   onFileDropped($event) {
     this.prepareFilesList($event);
   }
 
   /**
    * handle file from browsing
    */
   fileBrowseHandler(files) {
     this.prepareFilesList(files);
   }
 
   /**
    * Delete file from files list
    * @param index (File index)
    */
   deleteFile(index: number) {
     this.files.splice(index, 1);
   }
 
   /**
    * Simulate the upload process
    */
   uploadFilesSimulator(index: number) {
     setTimeout(() => {
       if (index === this.files.length) {
         return;
       } else {
         const progressInterval = setInterval(() => {
           if (this.files[index].progress === 100) {
             clearInterval(progressInterval);
             this.uploadFilesSimulator(index + 1);
           } else {
             this.files[index].progress += 5;
           }
         }, 200);
       }
     }, 1000);
   }
 
   /**
    * Convert Files list to normal array list
    * @param files (Files List)
    */
   prepareFilesList(files: Array<any>) {
     for (const item of files) {
       item.progress = 0;
       this.files.push(item);
     }
     this.uploadFilesSimulator(0);
   }
 
   /**
    * format bytes
    * @param bytes (File size in bytes)
    * @param decimals (Decimals point)
    */
   formatBytes(bytes, decimals) {
     if (bytes === 0) {
       return '0 Bytes';
     }
     const k = 1024;
     const dm = decimals <= 0 ? 0 : decimals || 2;
     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
     const i = Math.floor(Math.log(bytes) / Math.log(k));
     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   }
   // For drap amd drop ends  here
}

