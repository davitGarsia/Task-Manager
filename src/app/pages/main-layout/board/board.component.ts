import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../../../core/services/board.service";
import {ProjectService} from "../../../core/services/project.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private projectService: ProjectService) {}

  board: any
  projectName = this.projectService.projectName;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params) {

        this.boardService.getBoardByID(params['id'], params['projectId']).subscribe({
          next: res => this.board = res
        })
        console.log(params['id'])
      }
    })
  }
}
