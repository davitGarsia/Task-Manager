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
    return this.get<IProject[]>('project/all');
  }

  getById(id: any):Observable<any> {
    return this.get<any>('project/'+`${id}`)
  }
}
