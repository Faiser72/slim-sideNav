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

// upload starts here
   // fileUploads
   uploadFiles = new FormData();
   photoFile: FileList;
   resumeFile: FileList;
   resumecvFile: string | Blob;
   ppFile: string | Blob;
   placeholder_path: string;
   resumeFileName: string;
   doctorPhotoName: string;
   photoMessage: string;
   resumeMessage: string;
   doctorRoleList: any;
  isShowPic: boolean=false;
  //  upload ends here

  constructor() { 
    this.placeholder_path = "../../../../assets/Placeholder.jpg";
  }

  showUpload(){
    this.isShowPic=true;
  }


  getPhotoFile(photoUpload: HTMLInputElement, event: any) {
    const fileName = event.target.files[0].name;
    this.photoFile = photoUpload.files;

    if (this.photoFile.length === 0) return;

    let mimeType = this.photoFile[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.placeholder_path = "../../../../assets/Placeholder.jpg";
      this.photoMessage = "Only image files are supported.";
      this.doctorPhotoName = "No File Chosen";
      return;
    } else {
      let reader = new FileReader();
      reader.readAsDataURL(this.photoFile[0]);
      reader.onload = (_event) => {
        this.placeholder_path = reader.result as string;
        this.doctorPhotoName = fileName;
      };
      this.photoMessage = null;
      this.ppFile = event.target.files[0];
    }
  }

  ngOnInit() {
  }

  ageFromDateOfBirth(dob){
    
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

