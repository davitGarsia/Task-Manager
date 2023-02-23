import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../core/services/project.service";
import {Observable} from "rxjs";
import {IProject} from "../../../core/interfaces/iproject";
import {Router} from "@angular/router";
import {ProjectFacade} from "../../../facades/project-facade.service";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: any = [];
  projects$: Observable<IProject[]> = this.projectService.getAllProjects();
  currentProject?: IProject | undefined = this.projectFacade.getProject()

  constructor(
    private projectService: ProjectService,
    private projectFacade: ProjectFacade,
  ) {
  }

  ngOnInit(): void {

  }

  selectedProject($event: any) {
    console.log($event);

  }
}




