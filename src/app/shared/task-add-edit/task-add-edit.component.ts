import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TaskService} from "../../core/services/task.service";
import {Column} from "../../core/interfaces";
import {Observable, Subject, takeUntil} from "rxjs";
import {IssueTypesService} from "../../core/services";

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent implements OnInit, OnDestroy{

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    issueTypeId: new FormControl('', Validators.required),
    epicId: new FormControl('', Validators.required),
    boardId: new FormControl('', Validators.required),
    boardColumnId: new FormControl('', Validators.required),
    isBacklog: new FormControl(true, Validators.required),
    priority: new FormControl('', Validators.required),
    taskStatus: new FormControl('', Validators.required),
    assigneeId: new FormControl('', Validators.required),
    reporterId: new FormControl('', Validators.required),
    taskProperty: new FormArray([]),
  })

  constructor(
    private taskService: TaskService,
    private issueTypeService: IssueTypesService,
    public dialogRef: MatDialogRef<TaskAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {taskId: number, boardId: number, boardColumn: Column}
  ) {
  }

  sub$ = new Subject();
  types$: Observable<any> = this.issueTypeService.getIssueType();
  priorities: { id: 'LOW' | 'MEDIUM' | 'HIGH', name: string }[] = [
    {id: 'LOW', name: 'Low'},
    {id: 'MEDIUM', name: 'Medium'},
    {id: 'HIGH', name: 'High'},
  ]

  get taskProperty() {
    return this.form.get('taskProperty') as FormArray;
  }



  ngOnInit() {
    if (this.data.taskId) {
      this.getTask(this.data.taskId);
    }
    console.log(this.types$);
  }

  // addTaskProperty() {
  //   this.taskProperty.push(new FormGroup({
  //     name: new FormControl(null, Validators.required),
  //     filedName: new FormControl(null, Validators.required),
  //     value: new FormControl(null, Validators.required),
  //     isRequired: new FormControl(null, Validators.required)
  //   }))
  // }

  private getTask(taskId: number) {
    this.taskService.getTask(taskId)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.form.patchValue(res)
        res.taskProperty.forEach(property => {
          this.taskProperty.push(new FormGroup({
            id: new FormControl(property.id),
            name: new FormControl(property.name, Validators.required),
            filedName: new FormControl(property.filedName, Validators.required),
            value: new FormControl(property.value, Validators.required),
            isRequired: new FormControl(property.isRequired, Validators.required),
          }))
        })
      })
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    if(this.data.taskId) {
      this.taskService.updateTask(this.data.taskId, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe(res => {
        this.dialogRef.close(res);
      })
    } else {
      this.taskService.createTask(this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe(res => {
        this.dialogRef.close(res);
      })
    }
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
