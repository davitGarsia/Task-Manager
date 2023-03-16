import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IProject} from "../../core/interfaces/iproject";
import {ProjectService} from "../../core/services/project.service";
import {ProjectFacade} from "../../facades/project-facade.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{

  scrolledTop: boolean = false;
  scrolled: boolean= true;

  projects: any = [];
  projects$: Observable<IProject[]> = this.projectService.getAllProjects();
  currentProject?: IProject | undefined = this.projectFacade.getProject()
  sub$ = new Subject()
constructor(
  private projectService: ProjectService,
  private projectFacade: ProjectFacade,
) {
}

  @ViewChild('project') project!: ElementRef;

  ngAfterViewInit() {
    this.project.nativeElement.addEventListener('scroll', () => {
      let firstElPos = this.project.nativeElement.firstChild.getBoundingClientRect().top;
      firstElPos <= -10 ? this.scrolled = true : this.scrolled = false;
      firstElPos <= -window.innerHeight ? this.scrolledTop = true : this.scrolledTop = false;
    })
  }
  selectedProject(projectId: any) {
    this.projectFacade.setProjectId(projectId)
    setTimeout(() => {
      location.reload()
    }, 2000)
  }

}
