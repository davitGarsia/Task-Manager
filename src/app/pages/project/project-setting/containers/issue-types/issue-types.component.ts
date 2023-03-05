import {Component, OnDestroy, OnInit} from '@angular/core';
import {IssueTypesService} from "../../../../../core/services";
import {Subject, takeUntil} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-issue-types',
  templateUrl: './issue-types.component.html',
  styleUrls: ['./issue-types.component.scss']
})
export class IssueTypesComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'name', 'createdAt', 'actions'];

  dataSource = new MatTableDataSource();

  sub$ = new Subject();

  constructor(private issueTypesService: IssueTypesService) {
  }

  ngOnInit() {
    this.getIssueTypes();
  }

  getIssueTypes() {
    this.issueTypesService.getIssueType()
      .pipe(takeUntil(this.sub$))
      .subscribe(issueType => {
        console.log(issueType)
        this.dataSource.data = issueType;
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
