import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable, tap } from 'rxjs';

import {IProject} from "../interfaces/iproject";


@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService extends BaseService {
  addProject(payload: any): Observable<any> {

    localStorage.setItem('project', JSON.stringify(payload));
    return this.post<any>('project', payload);
  }
  getProjects(order: string, page: number, limit: number): Observable<any> {
    return this.get<any>(`project?order=${order}&page=${page}&limit=${limit}`);
  }
  getMyProjects(): Observable<any> {
    return this.get<any>('project/my');
  }
  getAllProjects():Observable<IProject[]> {
    return this.get<IProject[]>('project/all');
  }
  getById(id: any):Observable<any> {
    return this.get<any>('project/'+`${id}`)
  }

  deleteProject(id: number):Observable<any> {
    return this.delete(`project/${id}`);
  }
}
