import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService} from "../../../../core/services/board.service";
import {Observable, of, pipe, Subject, switchMap, takeUntil, tap} from "rxjs";
import {IBoard} from "../../../../core/interfaces";

import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDeleteComponent} from "../../../../shared/confirm-delete/confirm-delete.component";
import {ControlProjectsService} from "../../../../core/services/control-projects.service";
import {IProject} from "../../../../core/interfaces/iproject";
import {ProjectFacade} from "../../../../facades/project-facade.service";
import {PaginatorService} from "../../../../core/services/paginator.service";
import {description} from "../../../../shared";


@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'name', 'createdAt', 'actions']
  dataSource = new MatTableDataSource<IBoard>();
  sub$ = new Subject()

  subs$ = new Subject()

  projectsArray: any = [];
  projectsArrayModified: any = [];

  projectsLength: number = 0;
  pageSize: number = 10;
  page: number = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100]

  sort: string = "DESC";

  constructor(
    private boardService: BoardService,
    private dialog: MatDialog,
    // private route: ActivatedRoute,
    private projectsService: ControlProjectsService,
    private projectFacade: ProjectFacade,
    public paginator: PaginatorService
  ) {

  }

  view: string = 'card';
  search?: string;

  getBoard() {
    this.boardService.getProjBoards().subscribe(boards => {
      console.log(boards)
      this.dataSource.data = boards
    })
  }

  description(desc: string) {
    return description(desc)
  }

  settingsChanged(event?: any, search?: string) {
    if (event) {
      this.page = event.pageIndex + 1;
      this.pageSize = event?.pageSize;
    } else {
      this.projectsArrayModified = this.projectsArray.slice((this.page - 1) * this.pageSize, this.page * this.pageSize + 1)
    }

    if (search) {
      let projectsArrayModified: any[] = this.projectsArray.filter((project: any) => {
        return project.boards.some((board: IBoard) => {
          return board.name.includes(search)
        })
      })

      projectsArrayModified.map((project: any) => {
        project.boards = project.boards.filter((board: any) => {
          return board.name.includes(search)
        })
      })

      this.projectsArrayModified = projectsArrayModified
    } else {
      this.projectsArrayModified = this.projectsArray.slice((this.page - 1) * this.pageSize, this.page * this.pageSize + 1)
    }
  }

  openDialog(id: number) {
    // this.dialog.open(id)
  }

  ngOnInit(): void {
    // this.getBoard()
    // this.route.params
    //   .pipe(
    //     takeUntil(this.sub$)
    //   )
    //   .subscribe(params => {
    //   if (params['id']) {
    //     this.boardService.getBoardss(params['id']).subscribe({
    //       next: res => this.boards = res
    //     })
    //     console.log(params['id'])
    //   }
    // })
    this.setData();

    this.paginator.search.subscribe(value => {
      this.search = value;
      this.page = 1;
      value ? this.pageSize = this.projectsLength : this.pageSize = 10;
      this.settingsChanged(null, value)
    })

    this.paginator.sort.subscribe(value => {
      if(value === 'ASC') {
        this.projectsArray.sort((a: IProject, b: IProject) => a.id - b.id);
      } else {
        this.projectsArray.sort((a: IProject, b: IProject) => b.id - a.id);
      }

      this.projectsArrayModified = this.projectsArray;
      this.settingsChanged(null, this.search)
    })
  }

  setData() {
    this.projectsService.getProjectsWithBoards().subscribe(projects => {
      this.projectsLength = projects.length;
      this.projectsArray = projects;
      this.settingsChanged()
    })
  }

  deleteBoard(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);
    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.sub$),
        switchMap((result) => {
          if (result) {
            console.log(result)
            return this.boardService.deleteBoard(id);
          }
          return of(null);
        })
      ).subscribe(result => {
      if (result) {
        this.getBoard();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
    this.subs$.next(null);
    this.subs$.complete();
  }
}

