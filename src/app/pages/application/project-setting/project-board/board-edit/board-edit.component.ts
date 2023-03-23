import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskStatusEnum} from "../../../../../core/enums/task-status.enum";
import {BoardService} from "../../../../../core/services/board.service";
import {ActivatedRoute, Router} from "@angular/router";

import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

import {ProjectService} from "../../../../../core/services/project.service";
import {IBoard} from "../../../../../core/interfaces";


@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit {
  boardId!: number;
  taskStatuses = Object.values(TaskStatusEnum);
  projectId!: number;
  boards: any[] = []

  constructor(
    private boardService: BoardService,
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
  }

  @Input('isInProjectEdit') isInProjectEdit!: boolean;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.isInProjectEdit) {
        this.projectId = +params['id'];
        this.getBoards()
      } else {
        this.boardId = +params['id'];
        this.getBoard()
      }
    })
  }

  getBoard() {
    this.boardService.getBoardId(this.boardId).subscribe(res => {
      this.form.patchValue(res)
      res.columns.forEach(column => {
        this.columnsArray.push(new FormGroup({
          id: new FormControl(column.id),
          name: new FormControl(column.name, Validators.required),
          description: new FormControl(column.description, Validators.required),
          position: new FormControl(column.position, Validators.required),
          taskStatus: new FormControl(column.taskStatus, Validators.required)
        }, Validators.required));
      })
    })
  }

  getBoards() {
    this.boardService.getBoardsByProject(this.projectId).subscribe((res: any) => {
      this.boards = res;

      res.forEach( (item: any) => {
        const form: FormGroup = new FormGroup({
          name: new FormControl('', Validators.required),
          position: new FormControl(1, Validators.required),
          description: new FormControl('', Validators.required),
          columns: new FormArray([], Validators.required),
        });
        form.patchValue(item)
        console.log(form.value)
        this.formsArray.push(form)
      })
      console.log(this.formsArray[0].controls.columns.controls)
    })
  }


  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    position: new FormControl(1, Validators.required),
    description: new FormControl(null, Validators.required),
    columns: new FormArray([], Validators.required),
  });

  formsArray: any[] = []


  get columnsArray(): FormArray {
    return this.form.get('columns') as FormArray;
  }
  addColumn() {
    this.columnsArray.push(new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      position: new FormControl(this.columnsArray.length + 1, Validators.required),
      taskStatus: new FormControl(TaskStatusEnum.ToDo, Validators.required),
    },Validators.required));

  columnsArrayFromFormsArray(index: number) {
     console.log(this.formsArray[index].get('columns'))
  }

  addColumn(index?: number) {
    if(index! >= 0) {
      this.formsArray[index!].get('columns').push(new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        position: new FormControl(this.columnsArray.length + 1, Validators.required),
        taskStatus: new FormControl(TaskStatusEnum.ToDo, Validators.required),
      }, Validators.required));
      console.log(this.formsArray[0].controls.columns.controls)
    } else {
      console.log(555555)
      this.columnsArray.push(new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        position: new FormControl(this.columnsArray.length + 1, Validators.required),
        taskStatus: new FormControl(TaskStatusEnum.ToDo, Validators.required),
      }, Validators.required));
    }
  }


  save() {
    console.log(this.formsArray[0].controls.columns.controls)
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.boardService.addBoard(this.form.value).subscribe(
      res => {
        this.router.navigate(['/application/setting/board']);
      }
    );
  }

  drop($event: CdkDragDrop<any, any>) {
    moveItemInArray(this.columnsArray.controls, $event.previousIndex, $event.currentIndex);
    console.log(this.columnsArray.controls);
    this.columnsArray.controls.forEach((control, index) => {
      control.get('position')?.setValue(index + 1);
    })

  }
}
