import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StepperNextService {
  nextStep = new BehaviorSubject<number>(0);

  nextStepOpen$: Observable<number> = this.nextStep.asObservable();

  openNextStep(step: number) {
    this.nextStep.next(step);
    console.log(this.nextStep);
  }
}
