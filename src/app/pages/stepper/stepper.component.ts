import { Component, OnInit } from '@angular/core';

import { StepperNextService } from 'src/app/core/services/stepper.next.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  isEditable = true;

  nextStepOpen$: Observable<number> = this.stepperService.nextStepOpen$;

  linear = this.stepperService.isLinear$;

  constructor(private stepperService: StepperNextService) {}

  ngOnInit(): void {}

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(3);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
  }
}
