import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {PaginationResponse} from "../interfaces/pagination-response";
import {IProject} from "../interfaces/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {
  projectName = '';

  getProjects():Observable<PaginationResponse<IProject>> {
return this.get<PaginationResponse<IProject>>('project');
  }
  getAllProjects():Observable<IProject[]> {
    return this.get<IProject[]>('project/my');
  }
  getProjectById(id: number):Observable<IProject> {
    return this.get<IProject>(`project/${id}`);
  }
  createProject(project: IProject): Observable<IProject> {
    return this.post<IProject>('project', project);
  }
  updateProject(id: number, project: IProject):Observable<IProject> {
    return this.put<IProject>(`project/${project.id}`, project);
  }
  deleteProject(id: number):Observable<any> {
    return this.delete(`project/${id}`);
  }
  getProjectUsers(id: number):Observable<any>{
    return this.get('project/${id}/users');
  };

  getById(id: any):Observable<any> {
    return this.get<any>('project/'+`${id}`)
  }


}
