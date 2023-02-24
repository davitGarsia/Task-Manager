import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import {HttpHeaders} from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class BoardService extends BaseService {

  addBoard(payload: any): Observable<any> {
    return this.post<any>('board', payload);
  }

  getBoards(header: any): Observable<any> {
    return this.get<any>('board', header)
  }

  getBoardByID(boardId: number, projectId: string): Observable<any> {
    return this.get<any>(`board/${boardId}`, {headers: {project: projectId}})
  }
}
