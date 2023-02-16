import { Component } from '@angular/core';
import {ProjectService} from "../../../core/services/project.service";
import {Observable} from "rxjs";
import {IProject} from "../../../core/interfaces/iproject";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  project = [];
projects$: Observable<IProject[]> = this.projectService.getAllProjects();
  constructor(
    private projectService: ProjectService,
  ) { }

}
