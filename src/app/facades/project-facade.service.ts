import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectFacade {
  setProject(project: any) {
    console.log(project)
    if (project) {
      localStorage.setItem('project', JSON.stringify(project));
    }
  }

  getProject() {
    const project = localStorage.getItem('project');
    console.log(project)
    return project ? JSON.parse(project) : null;
  }
}
