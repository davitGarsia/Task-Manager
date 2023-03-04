import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import {HttpHeaders} from "@angular/common/http";

import {IBoard} from "../interfaces/board";

@Injectable({ providedIn: 'root' })
export class BoardService extends BaseService {

  addBoard(payload: any): Observable<any> {
    localStorage.setItem('board', JSON.stringify(payload));
    return this.post<any>('board', payload);
  }

  getBoards(header: any): Observable<any> {
    return this.get<any>('board', header)
  }

  getBoardByID(boardId: number, projectId: string): Observable<any> {
    return this.get<any>(`board/${boardId}`, {headers: {project: projectId}})
  }
  getBoardss(): Observable<IBoard[]> {
    return this.get<IBoard[]>('board');
  }
}
