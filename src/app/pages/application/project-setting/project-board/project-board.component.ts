import { Component } from '@angular/core';
import {BoardService} from "../../../../core/services/board.service";
import {Observable} from "rxjs";
import {IBoard} from "../../../../core/interfaces/board";

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent {
boards$: Observable<IBoard[]> = this.boardService.getBoards();
  displayedColumns = ['id', 'name', 'description', 'createdAt']

    constructor(
      private boardService: BoardService,
    ) { }

  editBoard() {

  }
}

