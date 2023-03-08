import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../../../core/services/board.service";
import {ProjectService} from "../../../core/services/project.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskAddEditComponent} from "../../../shared/task-add-edit/task-add-edit.component";
import {Column, IBoard} from "../../../core/interfaces";
import {ITask} from "../../../core/interfaces/task";
import {TaskService} from "../../../core/services/task.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  boardId!: number;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private projectService: ProjectService,
    private taskService: TaskService,
    public dialog: MatDialog) {}

  board: IBoard = {} as IBoard;
  tasks: any = {};
  projectName = this.projectService.projectName;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params) {
        this.boardId = +params['id'];
        this.boardService.getBoardByID(params['id'], params['projectId']).subscribe(res => {
          this.board = res;
          console.log(res);
        })
        console.log(params['id'])
      }
    })
  }

  fetchTasks() {
    this.taskService.getTasks({boardId: this.boardId})
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  addTask(column: Column) {
    this.dialog.open(TaskAddEditComponent, {
      width: '250px',
      data: {
        boardId: this.boardId,
        column: column,
      }
    })
  }

}
