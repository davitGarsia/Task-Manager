import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  projectFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    abbr: ['', Validators.required],
    description: ['', Validators.required],
    color: ['', Validators.required],
  });
  isEditable = true;
}
