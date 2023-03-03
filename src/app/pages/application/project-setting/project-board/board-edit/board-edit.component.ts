import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskStatusEnum} from "../../../../../core/enums/task-status.enum";
import {BoardService} from "../../../../../core/services/board.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit {


 constructor(
   private boardService: BoardService,
   private router: Router,

 ) { }

ngOnInit(): void {

}


  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    position: new FormControl(1, Validators.required),
    description: new FormControl(null, Validators.required),
    columns: new FormArray([], Validators.required),
  });
  taskStatuses = Object.values(TaskStatusEnum);

  get columnsArray(): FormArray {
    return this.form.get('columns') as FormArray;
  }
  addColumn() {
    this.columnsArray.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      position: new FormControl(this.columnsArray.length + 1, Validators.required),
      taskStatus: new FormControl(TaskStatusEnum.ToDo, Validators.required),
    },Validators.required));

  }


  save() {
this.form.markAllAsTouched();
if (this.form.invalid) {
  return;
}
this.boardService.addBoard(this.form.value).subscribe(
  res =>{
    this.router.navigate(['/application/setting/board']);
  }
);
  }
}
