import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ProjectFacade } from 'src/app/facades/project-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: any): Observable<any> {
    return this.post<any>('project', payload);
  }

  addBoard(payload: any): Observable<any> {
    return this.post<any>('board', payload);
  }
}
