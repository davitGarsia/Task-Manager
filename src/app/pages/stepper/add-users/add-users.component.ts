import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService
  ) {}

  ngOnInit(): void {}

  usersFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    idNumber: ['', Validators.required],
    email: ['', Validators.required],
    mobNumber: ['', Validators.required],
  });
  isEditable = true;

  onSubmit() {
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(4);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);
  }

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
  }
}
