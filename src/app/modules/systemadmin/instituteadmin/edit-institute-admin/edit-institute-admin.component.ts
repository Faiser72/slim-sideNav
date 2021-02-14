import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-institute-admin',
  templateUrl: './edit-institute-admin.component.html',
  styleUrls: ['./edit-institute-admin.component.scss']
})
export class EditInstituteAdminComponent implements OnInit {

  isGeneratePassword: boolean = false;
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
  isShowPic: boolean = false;
  //  upload ends here

  constructor(private route: Router) {
    this.placeholder_path = "../../../../assets/Placeholder.jpg";
  }

  ngOnInit() {
  }

  showUpload() {
    this.isShowPic = true;
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

  generatePwd() {
    this.isGeneratePassword = true;
  }

}
