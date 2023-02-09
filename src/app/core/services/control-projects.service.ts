import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Project } from '../interfaces/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: any): Observable<any> {
    return this.post<any>('project', payload);
  }
}
