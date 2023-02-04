import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';
import { Observable } from 'rxjs';
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

  nextStepOpen$: Observable<number> = this.stepperService.nextStepOpen$;
  //index = this.stepperService.index;

  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService
  ) {}

  ngOnInit(): void {}
}
