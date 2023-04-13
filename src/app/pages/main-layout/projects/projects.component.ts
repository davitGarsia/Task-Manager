import {Component, Input, OnInit} from '@angular/core';
import {ControlProjectsService} from "../../../core/services/control-projects.service";
import {BoardService} from "../../../core/services/board.service";
import {Router} from "@angular/router";
import {SharedService} from "../../../core/services/shared.service";
import {IProject} from "../../../core/interfaces/iproject";
import {PageEvent} from "@angular/material/paginator";
import {ProjectFacade} from "../../../facades/project-facade.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  constructor(private projectsService: ControlProjectsService,
              private boardService: BoardService,
              private sharedService: SharedService,
              private router: Router,
              private projectFacade: ProjectFacade) {
  }

  projects: IProject[] = [];
  projectsLength: number = 0;
  pageSize: number = 25;
  page: number = 1;

/*  @Input('length') length!: number;
  @Input('pageSize') pageSize!: number;
  @Input('pageSizeOptions') pageSizeOptions!: number;*/

  ngOnInit() {
    this.getProjects();

    // this.projectsService.getAllProjects()
    //   .subscribe(res => {
    //     this.projectsLength = res.length;
    //   })
  }

  // getProjects(order: string, page: number, pageSize: number){
  //   this.projectsService.getProjects(order, page, pageSize).subscribe({
  //     next: res => res.data.forEach((project: any) => {
  //       this.projects.push(project);
  //     }),
  //     error: err => console.log(err),
  //   })
  // }

  getProjects() {
    this.projectsService.getMyProjects().subscribe({
      // next: res => res.forEach((project: any) => {
      //   this.projects.push(project);
      // })
      next: res => this.projects = res,
    })
  }

  saveProject(id: number) {
    this.projectsService.getById(id).subscribe({
      next: (res: any) => {
        this.projectFacade.setProject(res);
      }
    })
  }

  settingsChanged(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.projects = [];
    //this.getProjects(this.page, this.pageSize);
  }

  deleteProject(e: Event, id: number) {
    e.stopPropagation();
    this.projectsService.deleteProject(id).subscribe({
      next: res => res,
    })
    this.getProjects();
  }
}
