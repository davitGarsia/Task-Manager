import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable, tap } from 'rxjs';
import { ProjectFacade } from 'src/app/facades/project-facade.service';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: any): Observable<any> {
    console.log(payload)
    return this.post<any>('project', payload);
  }
}
