import {Component, Input, OnInit} from '@angular/core';
import {ControlProjectsService} from "../../../core/services/control-projects.service";
import {BoardService} from "../../../core/services/board.service";
import {Router} from "@angular/router";
import {SharedService} from "../../../core/services/shared.service";
import {IProject} from "../../../core/interfaces/iproject";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  constructor(private projectsService: ControlProjectsService,
              private boardService: BoardService,
              private sharedService: SharedService,
              private router: Router) {
  }

  projects: IProject[] = [];
  projectsLength: number = 0;
  pageSize: number = 10;
  page: number = 1;

/*  @Input('length') length!: number;
  @Input('pageSize') pageSize!: number;
  @Input('pageSizeOptions') pageSizeOptions!: number;*/

  ngOnInit() {
    this.getProjects('DESC', this.page, this.pageSize);

    this.projectsService.getAllProjects()
      .subscribe(res => {
        console.log(res)
        this.projectsLength = res.length;
      })
  }

  getProjects(order: string, page: number, pageSize: number){
    this.projectsService.getProjects(order, page, pageSize).subscribe({
      next: res => res.data.forEach((project: any) => {

        this.projects.push(project);
        //console.log(this.projects)
      }),
      error: err => console.log(err),
    })
  }

  // renderProjects() {
  //   // this.projectsService.getProjects().subscribe({
  //   //   next: res => console.log(res),
  //   //   error: err => console.log(err),
  //   // })
  // }

  // getProjectId(index: number) {
  //   console.log(this.projects[index].id);
  //   this.sharedService.receiveId(this.projects[index].id);
  //
  //
  //   this.router.navigate(['main/boards']);
  //
  // }
  settingsChanged(event: PageEvent) {
    console.log(event)
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.projects = [];
    this.getProjects('DESC', this.page, this.pageSize);
  }
}
