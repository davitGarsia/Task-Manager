import {Component, OnInit} from '@angular/core';
import {ControlProjectsService} from "../../../core/services/control-projects.service";
import {BoardService} from "../../../core/services/board.service";
import {Router} from "@angular/router";
import {SharedService} from "../../../core/services/shared.service";

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

  projects:any = [];

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
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
}
