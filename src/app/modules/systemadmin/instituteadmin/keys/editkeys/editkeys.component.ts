import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editkeys',
  templateUrl: './editkeys.component.html',
  styleUrls: ['./editkeys.component.scss']
})
export class EditkeysComponent implements OnInit {

  addKeysForm: FormGroup;
  // files: FileHandle[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addKeyFormBuilder();
  }

  addKeyFormBuilder() {
    this.addKeysForm = this.fb.group({
      typeOfKey: [null, [Validators.required]],
      keyDescription: [null, [Validators.required]],
    });
  }

  // filesDropped(files: FileHandle[]): void {
  //   this.files = files;
  // }

}
