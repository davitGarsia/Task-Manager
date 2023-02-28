import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EpicService extends BaseService{

  getEpics(): Observable<any> {
    return this.get<any>('epics')
  }

  getEpic(id: number): Observable<any> {
    return this.get<any>(`epics/${id}`);
  }

  createEpic(epic: any): Observable<any> {
    return this.post<any>('epics', epic);
  }

  updateEpic(epic: any): Observable<any> {
    return this.put<any>(`epics/${epic.id}`, epic)
  }

  deleteEpic(id: number): Observable<any> {
    return this.delete(`epics/${id}`)
  }
}
