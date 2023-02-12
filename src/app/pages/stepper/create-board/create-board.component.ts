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
      name: ['', Validators.required],
      description: ['', Validators.required],
      position: 0,
      taskStatus: 'ToDo',
    }),

    inProgressColumn: this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      position: 1,
      taskStatus: 'In Progress',
    }),

    doneColumn: this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      position: 2,
      taskStatus: 'Done',
    }),
  });

  get name() {
    return this.boardFormGroup.get('name')?.value;
  }

  get description() {
    return this.boardFormGroup.get('description')?.value;
  }

  get position() {
    return this.boardFormGroup.get('position')?.value;
  }

  get todoCol() {
    return this.boardFormGroup.get('todoColumn')?.value;
  }

  get progressCol() {
    return this.boardFormGroup.get('inProgressColumn')?.value;
  }

  get doneCol() {
    return this.boardFormGroup.get('doneColumn')?.value;
  }

  onSubmit() {
    // Next btn
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);

    //Creating Board

    const board = {
      name: this.name,
      description: this.description,
      position: this.position,
      columns: [
        Object.entries(this.todoCol!),
        Object.entries(this.progressCol!),
        Object.entries(this.doneCol!),
      ],
    };

    console.log(this.boardFormGroup.value);
    this.controlProjectsService.addBoard(board).subscribe({
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
