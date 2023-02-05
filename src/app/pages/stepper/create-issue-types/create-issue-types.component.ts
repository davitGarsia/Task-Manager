import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { StepperNextService } from 'src/app/core/services/stepper.next.service';

@Component({
  selector: 'app-create-issue-types',
  templateUrl: './create-issue-types.component.html',
  styleUrls: ['./create-issue-types.component.scss'],
})
export class CreateIssueTypesComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService
  ) {}

  issueFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    icon: ['', Validators.required],
    color: ['', Validators.required],
    status: ['', Validators.required],
    tasks: ['', Validators.required],
    issueColumns: this._formBuilder.group({
      colName: ['', Validators.required],
      filedName: ['', Validators.required],
      issueID: ['', Validators.required],
    }),
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

  onSubmit() {
    this.stepperService.changeFromLinear();

    this.stepperService.openNextStep(3);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 1000);
  }

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(1);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
  }
}
