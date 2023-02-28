import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent {
  disabled: boolean = true;
  touchUi: boolean = false;
  colorCtr: any;
  color: any;

  form: FormGroup = new FormGroup({
    name: new FormControl('null', Validators.required),
    description: new FormControl('null', Validators.required),
    abbreviation: new FormControl('null', Validators.required),
    color: new FormControl('null', Validators.required),
  });

  onSubmit() {
    console.log(this.form.value)
  }
}
