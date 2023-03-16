import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from "@angular/core";
import {ControlProjectsService} from "../../../../core/services/control-projects.service";
import {BoardService} from "../../../../core/services/board.service";
import {Router} from "@angular/router";
import {IProject} from "../../../../core/interfaces/iproject";
import {PageEvent} from "@angular/material/paginator";
import {SharedService} from "../../../../core/services/shared.service";
import {ProjectFacade} from "../../../../facades/project-facade.service";

import {DescriptionComponent} from "./description.component";
import {MatDialog} from "@angular/material/dialog";
import {IBoard, User} from "../../../../core/interfaces";
import {PaginatorService} from "../../../../core/services/paginator.service";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-project-info',
  templateUrl: 'project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  providers: [DatePipe]
})

export class ProjectInfoComponent implements OnInit {

  constructor(
    private projectsService: ControlProjectsService,
    private boardService: BoardService,
    private sharedService: SharedService,
    private router: Router,
    private projectFacade: ProjectFacade,
    public dialog: MatDialog,
    public paginator: PaginatorService,
    private datePipe: DatePipe
  ) {
  }

  description(desc: string) {
    if (desc.length > 100) {
      return desc.slice(0, 100) + ' ...';
    }
    return desc;
  }

  projects: IProject[] = [];
  projectsLength: number = 0;
  pageSize: number = 10;
  page: number = 1;

  cardsCount: any[] = [];

  /*  @Input('length') length!: number;
    @Input('pageSize') pageSize!: number;
    @Input('pageSizeOptions') pageSizeOptions!: number;*/
  get project(): IProject {
    return this.projectFacade.getProject();
  }

  @ViewChild('dialog') dialogHtml!: TemplateRef<any>;

  dialogProject!: any;
  dialogUsers: User[] = [];
  dialogBoards: IBoard[] = [];

  pageSizeOptions: number[] = [5, 10, 25, 100]

  id!: number;

  openDialog(id: number) {
    this.id = id;
    console.log(id)
    this.dialogUsers = [];
    this.dialogBoards = [];
    this.dialogBoards = [];
    this.dialogProject = this.projects.find(project => project.id === id);
    this.projectsService.getUsersFromProject(id).subscribe(user => {
      console.log(user)
      this.dialogUsers = user;
    })
    this.boardService.getBoards(id).subscribe(board => {
      console.log(board)
      this.dialogBoards = board;
    })

    const dialogRef = this.dialog.open(this.dialogHtml);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formatDate(date: any) {
    const date0 = new Date(date);
    return this.datePipe.transform(date0, 'dd.MM.yyyy')
  }

  setCardsCount(count: number) {
    this.cardsCount = [];
    for (let i = 0; i < count; i++) {
      this.cardsCount.push(i)
    }
  }

  firstRender: boolean = true;
  view: string = 'card'

  ngOnInit() {
    this.setCardsCount(this.pageSize);

    this.paginator.sort.subscribe(value => {
      this.sortValue = value;
      !this.firstRender ? this.settingsChanged() : null;
      this.setCardsCount(this.pageSize);
    })

    this.paginator.search.subscribe(value => {
      this.page = 1;
      value ? this.pageSize = this.projectsLength : this.pageSize = 10;
      this.settingsChanged(null, value)
    })

    this.paginator.setSort('DESC');

    this.getProjects(this.sortValue, this.page, this.pageSize);
    this.projectsService.getAllProjects()
      .subscribe(res => {
        this.projectsLength = res.length;
        this.pageSizeOptions = [...this.pageSizeOptions, this.projectsLength]
        console.log(this.pageSizeOptions)
      })

    this.firstRender = false;
    this.paginator.view.subscribe(value => {
      this.view = value;
    })
  }


  getProjects(order: string, page: number, pageSize: number, search?: string) {
    this.projectsService.getProjects(order, page, pageSize, search).subscribe({
      next: res => res.data.forEach((project: any) => {
        this.projects.push(project);
      }),
      error: err => console.log(err),
      complete: () => {
        this.cardsCount = []
        if (!this.projects.length && search) {
          this.projects = [
            {
              id: 0,
              name: "Search Result",
              abbreviation: "Found 0 Project",
              description: "Try to Type Another Project Name",
              color: 'red',
              search: search
            }
          ]
        }

      }
    })
  }

  @Input('sort') sort!: string;


  sortValue!: string;


  settingsChanged(event?: any, search?: string) {
    if (event) {
      this.page = event.pageIndex + 1;
      this.pageSize = event?.pageSize;
      this.setCardsCount(event?.pageSize);
    } else {
      this.setCardsCount(this.pageSize);
    }

    this.projects = [];
    this.getProjects(this.sortValue, this.page, this.pageSize, search);

  }
}
