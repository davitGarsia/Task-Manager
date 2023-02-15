import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Product } from '../interfaces/project';
import { Observable, tap } from 'rxjs';
import { ProjectFacade } from 'src/app/facades/project-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: any): Observable<any> {
    return this.post<any>('project', payload);
  }
}