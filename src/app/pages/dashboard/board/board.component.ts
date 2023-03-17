import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../../core/services/board.service";
import {ActivatedRoute} from "@angular/router";
import {IBoard} from "../../../core/interfaces";
import {ITask} from "../../../core/interfaces/task";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
boardId!: number;
board!: IBoard;
  tasks: any = {
   25: [
      {
        id: 1,
        title: 'Task 1',
      },
      {
        id: 2,
        title: 'Task 2',
      }
    ],
    26: [],
    27: []
  };
  constructor(
    private boardService: BoardService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['id']) {
        this.boardId = +params['id']
        this.getBoard()

      }
    })
  }

  getBoard() {
    this.boardService.getBoardId(this.boardId).subscribe(board =>{
     console.log(board);
      this.board = board;
    })
  }


  drop(event: CdkDragDrop< any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  addTask(id: number) {
    
  }
}
