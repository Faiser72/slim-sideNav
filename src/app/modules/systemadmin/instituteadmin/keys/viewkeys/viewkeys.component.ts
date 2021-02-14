import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewkeys',
  templateUrl: './viewkeys.component.html',
  styleUrls: ['./viewkeys.component.scss']
})
export class ViewkeysComponent implements OnInit {

  viewKeysForm: FormGroup;
  constructor(private fb: FormBuilder,
    private route:Router) { }

  ngOnInit() {
    this.viewKeysFormBuilder();
  }

  viewKeysFormBuilder() {
    this.viewKeysForm = this.fb.group({
      typeOfKey: [null, [Validators.required]],
      keyDescription: [null, [Validators.required]],
    });
  }

  routeToEditKey() {
    this.route.navigate(['/editkeys'])
  }

}
