import { Injectable } from '@angular/core';
import {IssueTypesService} from "../issue-types.service";
import {IssueType} from "../../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IssueTypesFacadeService {

  constructor(
    private issueTypeService: IssueTypesService
  ) {
  }

  setIssueType(issueType: IssueType) {
    this.issueTypeService.setIssueType(issueType)
  }

  getIssueType(): Observable<any> {
   return  this.issueTypeService.getIssueType();
  }

  getIssueTypeByID(id: number): Observable<any> {
    return this.issueTypeService.getIssueTypeByID(id)
  }

  updateIssueType(id: number, issueType: IssueType): Observable<any> {
    return this.issueTypeService.updateIssueType(id, issueType);
  }

  deleteIssueType(id: number): Observable<any> {
    return this.issueTypeService.deleteIssueType(id);
  }
}
