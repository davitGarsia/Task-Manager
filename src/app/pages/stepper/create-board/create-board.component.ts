import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService
  ) {}

  ngOnInit(): void {}

  boardFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    position: 0,
    columns: this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      position: 0,
      boardId: 0,
      taskStatus: 'ToDo',
    }),
  });

  onSubmit() {
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);
  }

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(0);
  }
}
