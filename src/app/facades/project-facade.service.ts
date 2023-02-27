import { Injectable } from '@angular/core';
import {ProjectService} from "../core/services/project.service";

@Injectable({ providedIn: 'root' })
export class ProjectFacade {
  constructor(private projectService: ProjectService ) {}

  setProject(project: any) {
    if (project) {
      localStorage.setItem('project', JSON.stringify(project))
    }
  }

  getProject() {
    const project = localStorage.getItem('project');

    return project ? JSON.parse(project) : null;
  }
  setProjectId(projectId: any) {
    this.projectService.getProjectById(projectId).subscribe((project) => {
      localStorage.setItem('project', JSON.stringify(project));
    }
    )
  }
}
