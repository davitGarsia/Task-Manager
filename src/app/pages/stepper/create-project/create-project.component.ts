import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService
  ) {}

  ngOnInit(): void {}

  projectFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    abbr: ['', Validators.required],
    description: ['', Validators.required],
    color: ['', Validators.required],
  });
  isEditable = true;

  nextStep(index: number) {
    this.stepperService.openNextStep(1);
  }
}
