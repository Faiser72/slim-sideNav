import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addinstituteadmin',
  templateUrl: './addinstituteadmin.component.html',
  styleUrls: ['./addinstituteadmin.component.scss']
})
export class AddinstituteadminComponent implements OnInit {

  InstituteDetails = [
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
    { instituteName: 'instituteName1', instituteId: 'instituteId1' },
    { instituteName: 'instituteName2', instituteId: 'instituteId2' },
    { instituteName: 'instituteName3', instituteId: 'instituteId3' },
    { instituteName: 'instituteName4', instituteId: 'instituteId4' },
    { instituteName: 'instituteName5', instituteId: 'instituteId5' },
    { instituteName: 'instituteName6', instituteId: 'instituteId6' },
    { instituteName: 'instituteName7', instituteId: 'instituteId7' },
    { instituteName: 'instituteName8', instituteId: 'instituteId8' },
    { instituteName: 'instituteName9', instituteId: 'instituteId9' },
    { instituteName: 'instituteName10', instituteId: 'instituteId10' },
    { instituteName: 'instituteName11', instituteId: 'instituteId11' },
    { instituteName: 'instituteName12', instituteId: 'instituteId12' },
    { instituteName: 'instituteName12', instituteId: 'instituteId13' },
    { instituteName: 'instituteName14', instituteId: 'instituteId14' },
  ];

  gridView: boolean = true;
  listView: boolean = false;

  selectedInstituteName: any;
  selectedInstituteId: any;
  displayInstituteAdminDetails: boolean = false;

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

  ngOnInit() {
  }

  grid() {
    this.listView = false;
    this.gridView = true
  }

  list() {
    this.listView = true;
    this.gridView = false;
  }

  instituteObject(instituteDetails) {
    this.selectedInstituteId = instituteDetails.instituteId;
    this.selectedInstituteName = instituteDetails.instituteName;
    this.displayInstituteAdminDetails = true;
  }
  applyFilter(data){

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
}
