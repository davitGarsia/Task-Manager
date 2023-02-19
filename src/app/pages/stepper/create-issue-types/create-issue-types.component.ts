import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

import { IssueTypesService } from 'src/app/core/services';

@Component({
  selector: 'app-create-issue-types',
  templateUrl: './create-issue-types.component.html',
  styleUrls: ['./create-issue-types.component.scss'],
})
export class CreateIssueTypesComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private issueTypesService: IssueTypesService
  ) {}

  issueFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    icon: ['', Validators.required],
    color: ['#FDFEFE', Validators.required],
    status: ['', Validators.required],
    tasks: ['', Validators.required],
    columns: this._formBuilder.array([]),
  });
  isEditable = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  taskControl = new FormControl();
  filteredTasks!: Observable<string[]>;
  tasks: string[] = [];
  allTasks: string[] = ['Task', 'Bug', 'Test', 'Spike'];

  @ViewChild('taskInput') taskInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.filteredTasks = this.taskControl.valueChanges.pipe(
      startWith(null),
      map((task: any) => (task ? this.filter(task) : this.allTasks.slice()))
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tasks.push(value);
    }

    event.chipInput!.clear();
    this.taskControl.setValue(null);
  }

  remove(role: string): void {
    const index = this.tasks.indexOf(role);

    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tasks.push(event.option.viewValue);
    this.taskInput.nativeElement.value = '';
    this.taskControl.setValue(null);
  }

  filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.allTasks.filter((task) =>
      task.toLowerCase().includes(filterValue)
    );
  }

  // Adding Issue Type
  get colsArray() {
    return <FormArray>this.issueFormGroup.get('columns');
  }

  addCol() {
    this.colsArray.push(
      new FormGroup(
        {
          name: new FormControl('', Validators.required),
          filedName: new FormControl('', Validators.required),
          isRequired: new FormControl('', Validators.required),
        },
        Validators.required
      )
    );
  }

  onSubmit() {
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(3);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);

    this.issueTypesService.setIssueType(this.issueFormGroup.value).subscribe({
      next: (res) => console.log(res),
    });
  }

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(1);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
  }
}
