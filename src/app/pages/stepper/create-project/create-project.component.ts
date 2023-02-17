import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

import { MatStepper, MatStepperNext } from '@angular/material/stepper';

import { ProjectFacade } from 'src/app/facades/project-facade.service';
import { ControlProjectsService } from 'src/app/core/services/control-projects.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private controlProjectsService: ControlProjectsService,
    private projectFacade: ProjectFacade
  ) {}

  ngOnInit(): void {}

  projectFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    abbreviation: ['', Validators.required],
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

<<<<<<< HEAD
    // this.projectFacadeService
    //   .createProject(this.projectFormGroup.value)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //   });
=======
    this.controlProjectsService
      .addProject(this.projectFormGroup.value)
      .pipe(
        tap((res) => {
          if (res) {
            this.projectFacade.setProject(res);
          }
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
>>>>>>> adc1ee5e21e535c77ad63b57cf50504d29e74851
  }
}
