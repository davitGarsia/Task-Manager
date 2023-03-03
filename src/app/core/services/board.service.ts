import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import {IBoard} from "../interfaces/board";

@Injectable({ providedIn: 'root' })
export class BoardService extends BaseService {
  addBoard(payload: any): Observable<any> {
    localStorage.setItem('board', JSON.stringify(payload));
    return this.post<any>('board', payload);
  }
  getBoards(): Observable<IBoard[]> {
    return this.get<IBoard[]>('board');
  }
}
