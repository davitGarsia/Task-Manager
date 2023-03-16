import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IssueType } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueTypesService {
  apiUrl = environment.apiUrl + 'issue-type';

  constructor(private http: HttpClient) {}

  setIssueType(issueType: any) {
    localStorage.setItem('issueType', JSON.stringify(issueType));
    return this.http.post(this.apiUrl, issueType);
  }

  getIssueType(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  getIssueTypeByID(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id); //`${this.apiUrl}/${id}`
  }

  updateIssueType(id: number, issueType: IssueType): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, issueType);
  }

  deleteIssueType(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
