import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ControlProjectsService } from 'src/app/core/services/control-projects.service';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private controlProjectsService: ControlProjectsService
  ) {}

  ngOnInit(): void {}

  boardFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    position: 0,
    todoColumn: this._formBuilder.group({
      todoColName: ['', Validators.required],
      todoColDescription: ['', Validators.required],
      position: 0,
      taskStatus: 'ToDo',
    }),
    inProgressColumn: this._formBuilder.group({
      progressColName: ['', Validators.required],
      progressColDescription: ['', Validators.required],
      position: 1,
      taskStatus: 'In Progress',
    }),
    doneColumn: this._formBuilder.group({
      doneColName: ['', Validators.required],
      doneColDescription: ['', Validators.required],
      position: 2,
      taskStatus: 'Done',
    }),
  });

  onSubmit() {
    // Next btn
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);

    //Creating Board
    console.log(this.boardFormGroup.value);
    this.controlProjectsService.addBoard(this.boardFormGroup.value).subscribe({
      next: (res) => console.log(res),
    });
  }

  // Prev Btn
  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(0);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
  }
}
