import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class BoardService extends BaseService {
  addBoard(payload: any): Observable<any> {
    return this.post<any>('board', payload);
  }
}
