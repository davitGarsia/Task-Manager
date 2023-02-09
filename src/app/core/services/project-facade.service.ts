import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServiceV1 } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectFacadeService extends BaseServiceV1 {
  createProject(payload: any): Observable<any> {
    return this.post<any>('project', payload);
  }
}
