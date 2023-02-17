import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { BaseService } from './base.service';
>>>>>>> adc1ee5e21e535c77ad63b57cf50504d29e74851

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
export class ProjectFacadeService {
  // createProject(payload: any): Observable<any> {
  //   return this.post<any>('project', payload);
  // }
=======
export class ProjectFacadeService extends BaseService {
  createProject(payload: any): Observable<any> {
    return this.post<any>('project', payload);
  }
  getProjects(): Observable<any> {
    return this.get<any>('project');
  }
>>>>>>> adc1ee5e21e535c77ad63b57cf50504d29e74851
}
