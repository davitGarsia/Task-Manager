import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class ProjectComponent implements OnInit, AfterViewInit {
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

  selectedProject(projectId: any) {
    console.log(projectId);
    this.projectFacade.setProjectId(projectId);

  }
   scrolledTop: boolean = false;
  scrolled: boolean= false;
  @ViewChild('project') project!: ElementRef;

  ngAfterViewInit() {
    this.project.nativeElement.addEventListener('scroll', () => {
      let firstElPos = this.project.nativeElement.firstChild.getBoundingClientRect().top;
      firstElPos <= -10 ? this.scrolled = true : this.scrolled = false;
      firstElPos <= -window.innerHeight ? this.scrolledTop = true : this.scrolledTop = false;
      console.log(firstElPos);
    })
  }

  clearLocalStorage() {
      localStorage.removeItem('project');
      localStorage.removeItem('board');
      localStorage.removeItem('issueType');
  }
}




