import {Injectable} from '@angular/core';
import {BaseService} from './base.service';

import {catchError, map, Observable, tap, throwError} from 'rxjs';
import {ProjectFacade} from 'src/app/facades/project-facade.service';
import {HttpHeaders} from '@angular/common/http';
import {IProject} from "../interfaces/iproject";
import {ProjectFacadeService} from "./project-facade.service";

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  constructor(
    private projectFacade: ProjectFacadeService
  ) {
    super();
  }

  addProject(payload: any): Observable<any> {
    localStorage.setItem('project', JSON.stringify(payload));
    return this.post<any>('project', payload);
  }

  getProjects(order: string, page: number, limit: number, search?: string): Observable<any> {
    if(search){
      return this.get<any>(`project?order=${order}&page=${page}&limit=${limit}&search=${search}`);
    }
    return this.get<any>(`project?order=${order}&page=${page}&limit=${limit}`);
  }

  getAllProjects(): Observable<IProject[]> {
    return this.get<IProject[]>('project/all');
  }

  addUsersToProject(payload: any): Observable<any> {
    console.log(payload)
    return this.post<any>('project/users', payload)
  }

  getUsersFromProject(id?: number): Observable<any> {
    return this.get<any>('project/users', id);
  }
}
