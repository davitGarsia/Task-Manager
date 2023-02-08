import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { ProjectFacadeService } from 'src/app/core/services/project-facade.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private projectFacadeService: ProjectFacadeService
  ) {}

  ngOnInit(): void {}

  projectFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    abbr: ['', Validators.required],
    description: ['', Validators.required],
    color: ['', Validators.required],
  });
  isEditable = true;

  onSubmit() {
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(1);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);

    console.log(this.projectFormGroup.value);

    // this.projectFacadeService
    //   .createProject(this.projectFormGroup.value)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //   });
  }
}
