import { Component } from '@angular/core';
import {IProject} from "../../../../core/interfaces/iproject";
import {ProjectFacade} from "../../../../facades/project-facade.service";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

constructor(
  private projectFacade: ProjectFacade,
) { }

  get project(): IProject {
    return this.projectFacade.getProject();
  }
}
