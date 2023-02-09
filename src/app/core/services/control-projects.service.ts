import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Product } from '../interfaces/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: Product): Observable<any> {
    return this.post<any>('project', payload);
  }
}
