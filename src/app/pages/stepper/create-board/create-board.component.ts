import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
import {ValidCounterService} from "../../../core/services/valid-counter.service";
import {IProject} from "../../../core/interfaces/iproject";
import {MatStepper} from "@angular/material/stepper";
import {noWhitespaceValidator} from "../../../core/validators/whitespace.validator";

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit, AfterViewInit {
  diameter: number = 30;
  spinner: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private boardService: BoardService,
    private validCounter: ValidCounterService
  ) {}


  ngAfterViewInit() {
    this.boardFormGroup.get('name')?.setValue('ss');
     this.boardComponent(1)
    this.boardFormGroup.get('name')?.setValue('');
  }

  boardComponent(index: number) {
    this.validCounter.validCounter(this.boardFormGroup, index);
    console.log('board')
  }
  project: IProject = {} as IProject;

  ngOnInit(): void {
    this.project = JSON.parse(localStorage.getItem('board')!);
    this.boardFormGroup.patchValue(this.project)
  }

  boardFormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4), noWhitespaceValidator]],
    description: ['', [Validators.required, Validators.minLength(4), noWhitespaceValidator]],
    position: 0,
    columns: this._formBuilder.array([]),
  });

  get colsArray() {
    return <FormArray>this.boardFormGroup.get('columns');
  }

  @ViewChild('boardForm') boardForm!: ElementRef;

  addCol() {
    this.colsArray.push(
      new FormGroup(
        {
          name: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            noWhitespaceValidator
          ]),
          description: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            noWhitespaceValidator
          ]),
          position: new FormControl(
            this.colsArray.length + 1,
            Validators.required
          ),
          taskStatus: new FormControl('', Validators.required),
        },
        Validators.required
      )
    );

    setTimeout(()=>{
      this.boardForm.nativeElement.scrollTop = this.boardForm.nativeElement.scrollHeight;
    },100)
  }

  deleteColumn(i: number) {
    this.colsArray.removeAt(i);
  }

  @Input('stepper') stepper!: MatStepper;

  onSubmit() {
    // Next btn
    this.spinner = true;

    //Creating Board

    console.log(this.boardFormGroup.value);
    this.boardService.addBoard(this.boardFormGroup.value).subscribe({
      next: (res) => {
        this.spinner = false;
        this.stepperService.navigateToNextStep(this.stepper);
        this.stepperService.changeFromLinear();

        this.stepperService.openNextStep(2);

        setTimeout(() => {
          this.stepperService.changeToLinear();
        }, 1000);
      }
    });
  }

  // Prev Btn
  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(0);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
    if (this.boardFormGroup.valid) {
      this.stepperService.complete.next(true);
    }
    this.stepperService.complete.next(false);
  }
}
