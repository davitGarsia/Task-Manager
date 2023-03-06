import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IBoard} from "../../../../core/interfaces";
import {Subject, takeUntil} from "rxjs";
import {ProjectService} from "../../../../core/services/project.service";
import {ProjectFacade} from "../../../../facades/project-facade.service";

@Component({
  selector: 'app-project-users',
  templateUrl: './project-users.component.html',
  styleUrls: ['./project-users.component.scss']
})
export class ProjectUsersComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'name', 'createdAt', 'actions']
  dataSource = new MatTableDataSource<IBoard>();
  sub$ = new Subject()

  get projectId() {
    return this.projectFacade.getProject().id
  }

  constructor(
    private projectService: ProjectService,
    private projectFacade: ProjectFacade,
  ) {
  }

  getProjectUsers() {
    this.projectService.getProjectUsers(this.projectId)
      .pipe(takeUntil(this.sub$))
      .subscribe(boards => {
        this.dataSource.data = boards
      })


  }

  ngOnInit(): void {
    this.getProjectUsers()
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
