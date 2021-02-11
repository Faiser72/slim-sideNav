import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";



@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent {
  isMenuOpen = true;
  contentMargin = 240;
  hidden= true

  sideBarOpen;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    // if (!this.isSmallMobileDevice.matches) {
    //   this.sideBarOpen = true;
    //   this.hasBackValue = true;
    // }
    // else {
    //   this.sideBarOpen = false;
    //   this.hasBackValue = false;
    // }
  }

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    console.log('togglllleeeeeee',this.sideBarOpen);
    
    this.isMenuOpen = !this.sideBarOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  switchMode(isDarkMode: boolean) {
    const hostClass = isDarkMode ? "theme-dark" : "theme-light";
    localStorage.setItem('theme', hostClass);
    let theme_local = localStorage.getItem('theme');
    this.renderer.setAttribute(this.document.body, "class", theme_local);
    // this.isDark = isDarkMode;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    console.log(this.sideBarOpen);
    this.isMenuOpen = !this.sideBarOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
    
  }

  // switchMode(mode) {
  //  console.log(mode.checked);
  //  if(mode.checked){
  //   localStorage.setItem('theme',"theme-dark")
  //  }
  //  else{
  //   localStorage.setItem('theme',"theme-light")

  //  }
  // }

  // sidenavEvents(str) {
  //   console.log(str);
  // }
}