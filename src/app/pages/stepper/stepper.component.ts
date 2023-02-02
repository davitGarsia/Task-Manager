import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    abbr: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    description: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    color: ['', Validators.required],
  });
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
