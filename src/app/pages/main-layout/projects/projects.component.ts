import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ControlProjectsService} from "../../../core/services/control-projects.service";
import {BoardService} from "../../../core/services/board.service";
import {Router} from "@angular/router";
import {SharedService} from "../../../core/services/shared.service";
import {IProject} from "../../../core/interfaces/iproject";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ProjectFacade} from "../../../facades/project-facade.service";
import {MatTableDataSource} from "@angular/material/table";

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

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getMyProjects().subscribe(res => {
      this.projects = res;
    })
  }

  saveProject(id: number) {
    this.projectsService.getById(id).subscribe({
      next: (res: any) => {
        this.projectFacade.setProject(res);
      }
    })
  }

  deleteProject(e: Event, id: number) {
    e.stopPropagation();
    this.projectsService.deleteProject(id).subscribe({
      next: res => res,
    })
    this.getProjects();
  }
}
