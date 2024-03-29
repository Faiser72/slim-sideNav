import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialGettingStarted';

  // isMenuOpen = true;
  // contentMargin = 240;

  // task: string[] = [
  //   'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  // ]

  // onToolbarMenuToggle() {
  //   console.log('On toolbar toggled', this.isMenuOpen);
  //   this.isMenuOpen = !this.isMenuOpen;

  //   if (!this.isMenuOpen) {
  //     this.contentMargin = 70;
  //   } else {
  //     this.contentMargin = 240;
  //   }
  // }
  // sidenavEvents(str) {
  //   console.log(str);
  // }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }


  switchMode(isDarkMode: boolean) {
    const hostClass = isDarkMode ? "theme-dark" : "theme-light";
    this.renderer.setAttribute(this.document.body, "class", hostClass);
    // this.isDark = isDarkMode;  
  }
}
