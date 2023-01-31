import { Injectable } from '@angular/core';
import {BaseServiceV1} from "./base.service-v1";
import {Product} from "../interfaces/project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ControlProjectsService extends BaseServiceV1{


  addProject(payload: Product): Observable<any> {
return this.post<any>('project', payload)
  }
}
