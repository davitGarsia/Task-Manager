import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../../core/services/board.service";
import {ActivatedRoute} from "@angular/router";
import {IBoard} from "../../../core/interfaces";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
boardId!: number;
board!: IBoard;
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



}
