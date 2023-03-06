import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TaskService} from "../../core/services/task.service";

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent {

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

  get taskProperty() {
    return this.form.get('taskProperty') as FormArray;
  }

  constructor(
    private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskAddEditComponent>,
  ) {
  }

  addTaskProperty() {
    this.taskProperty.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      filedName: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required),
      isRequired: new FormControl(null, Validators.required)
    }))
  }
}
