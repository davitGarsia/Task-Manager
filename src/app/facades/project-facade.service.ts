import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectFacade {
  setProject(project: any) {
    if (project) {
      localStorage.setItem('project', JSON.stringify(project));
    }
  }

  getProject() {
    const project = localStorage.getItem('project');

    return project ? JSON.parse(project) : null;
  }
}
