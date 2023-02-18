import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable, tap } from 'rxjs';
import { ProjectFacade } from 'src/app/facades/project-facade.service';
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {

  addProject(payload: any): Observable<any> {
    return this.http.post<any>( environment.apiUrl + 'project', payload, {headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })});
  }
}
