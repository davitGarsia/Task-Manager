import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {StepperNextService} from 'src/app/core/services/stepper.next.service';


import {ProjectFacade} from 'src/app/facades/project-facade.service';
import {ControlProjectsService} from 'src/app/core/services/control-projects.service';
import {catchError, Observer, tap, throwError} from 'rxjs';
import {ValidCounterService} from "../../../core/services/valid-counter.service";
import {MatStepper} from "@angular/material/stepper";
import {noWhitespaceValidator} from "../../../core/validators/whitespace.validator";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit, AfterViewInit {
  diameter: number = 30;
  spinner: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private controlProjectsService: ControlProjectsService,
    private projectFacade: ProjectFacade,
    private validCounter: ValidCounterService
  ) {
  }

  @Input('stepper') stepper!: MatStepper;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.projectComponent(0);
  }

  projectComponent(index: number) {
    this.validCounter.validCounter(this.projectFormGroup, index);
  }

  projectFormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    abbreviation: ['', [Validators.required, noWhitespaceValidator]],
    description: ['', [Validators.required, Validators.minLength(4), noWhitespaceValidator]],
    color: ['#910D9B'],
  });
  isEditable = true;

  onSubmit() {
    this.spinner = true;
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(1);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);

    console.log(this.projectFormGroup.value);
    this.controlProjectsService
      .addProject(this.projectFormGroup.value)
      .pipe(
        tap((res) => {
          this.projectFacade.setProject(res);
        })
      )
      .subscribe(res => {
          console.log(res);
          this.spinner = false;
          this.stepperService.navigateToNextStep(this.stepper);
        }
      );
    if (this.projectFormGroup.valid) {
      this.stepperService.complete.next(true);
    }
    this.stepperService.complete.next(false);
  }

  error(err
          :
          any
  ) {
    console.log(err)
  }
}
