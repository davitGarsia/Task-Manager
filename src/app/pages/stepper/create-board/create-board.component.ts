import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BoardService } from 'src/app/core/services/board.service';
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
    private boardService: BoardService
  ) {}

  ngOnInit(): void {}

  boardFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    position: 0,

    columns: this._formBuilder.array([]),
  });

  get colsArray() {
    return <FormArray>this.boardFormGroup.get('columns');
  }

  addCol() {
    this.colsArray.push(
      new FormGroup(
        {
          name: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
          position: new FormControl(
            this.colsArray.length + 1,
            Validators.required
          ),
          taskStatus: new FormControl('', Validators.required),
        },
        Validators.required
      )
    );
  }

  onSubmit() {
    // Next btn
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);

    //Creating Board

    console.log(this.boardFormGroup.value);
    this.boardService.addBoard(this.boardFormGroup.value).subscribe({
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
