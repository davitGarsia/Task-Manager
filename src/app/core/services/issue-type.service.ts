import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class IssueTypeService extends BaseService {
  addIssueType(payload: any): Observable<any> {
    return this.post<any>('issue-type', payload);
  }
}
