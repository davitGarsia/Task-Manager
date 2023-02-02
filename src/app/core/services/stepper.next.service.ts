import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StepperNextService {
  nextStep = new BehaviorSubject<boolean>(false);

  nextStepOpen$: Observable<boolean> = this.nextStep.asObservable();

  openNextStep() {
    this.nextStep.next(true);
  }
}
