import { Injectable } from '@angular/core';

import { Product } from '../interfaces/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlProjectsService {
  // addProject(payload: Product): Observable<any> {
  //   return this.post<any>('project', payload);
  // }
}
