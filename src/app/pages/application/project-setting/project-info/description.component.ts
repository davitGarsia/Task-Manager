import {Component, OnInit} from '@angular/core';
import {IProject} from "../../../../core/interfaces/iproject";
import {ProjectFacade} from "../../../../facades/project-facade.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {ProjectService} from "../../../../core/services/project.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  sub$ = new Subject()
constructor(
  private projectFacade: ProjectFacade,
  private projectService: ProjectService,
  private route: ActivatedRoute,
) { }
  form: FormGroup = new FormGroup({
    description: new FormControl(this.project.description, ),
  });
  get project(): IProject {
    return this.projectFacade.getProject();
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        if (params['id']){
          this.projectService.getProjectById(+params['id'])
            .pipe(takeUntil(this.sub$))
            .subscribe(
              res =>{
                this.form.patchValue(res)

              }
            )
        }
      }
    )
  }


  save() {

  }
}
