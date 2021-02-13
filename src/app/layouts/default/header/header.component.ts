import { Component, OnInit, Output, EventEmitter, Inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatSlideToggleChange, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


//for popup forgotpassword
export interface DialogData {
  email: any;
}
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  one = "primary";

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  @Input() public resultUrl: any;

  constructor(private router: Router,
    public dialog: MatDialog) { 
      console.log(this.resultUrl);
    }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }

  themes0() {
    this.one = "primary";
  }

  themes1() {
    this.one = "accent";
  }

  themes2() {
    this.one = "dark";
  }

  themes3() {
    this.one = "warn";
  }

  themes(): string {
    return this.one;
  }

  routeToChangePassword() {
    this.router.navigate(['home/changepassword'])
  }

  // doLogout() {
  //   if (this.authenticationService.logout()) {
  //     this.router.navigateByUrl('/login');
  //   } else {
  //     location.reload();
  //   }
  // }

   // institute routing starts here

   routeToAddInstitute() {
    this.router.navigate(['/addinstitute']);
  }

  routeToDraftInstitute() {
    this.router.navigate(['/draftinstitute']);
  }

  routeToViewInstitute() {
    this.router.navigate(['/viewinstitute']);

  }

  routeToManageInstitute() {
    this.router.navigate(['/manageinstitute']);
  }
  // institute routing starts here

  // instituteAdmin routing starts here

  routeToAddInstituteAdmin() {
    this.router.navigate(['/home/addinstituteadmin']);
  }

  routeToViewInstituteAdmin() {
    this.router.navigate(['/home/viewinstituteadmin']);

  }

  routeToManageInstituteAdmin() {
    this.router.navigate(['/manageinstituteadmin']);
  }
  // instituteAdmin routing ends here


  // Teacher routing starts here

  routeToAddTeacher() {
    this.router.navigate(['/home/addteacher']);
  }

  routeToViewTeacher() {
    this.router.navigate(['/home/viewteacher']);

  }

  routeToManageTeacher() {
    this.router.navigate(['/home/manageteacher']);
  }
  // Teacher routing ends here

  // Students routing starts here

  routeToAddStudent() {
    this.router.navigate(['/home/addstudent']);
  }

  routeToViewStudent() {
    this.router.navigate(['/home/viewstudent']);

  }

  routeToManageStudent() {
    this.router.navigate(['/home/managestudent']);
  }
  // Student routing ends here

  // Keys routing starts here

  routeToAddKeys() {
    this.router.navigate(['/home/addkeys']);
  }

  routeToViewKeys() {
    this.router.navigate(['/home/viewkeys']);

  }

  routeToManageKeys() {
    this.router.navigate(['/home/managekeys']);
  }
  // Keys routing ends here



  //for popup aboutuser  popup
  openDialog(): void {
    const dialogRef = this.dialog.open(AboutUser, {
      width: "500px",
      height: "500px"
      // data: { email: this.email },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed');
      // this.email = result;
    });
  }
}


//PopUp of About User popup
@Component({
  selector: "aboutuser",
  templateUrl: "aboutuser.html",
  styleUrls: ["./header.component.scss"]
})
export class AboutUser {
  constructor(
    public dialogRef: MatDialogRef<AboutUser>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}