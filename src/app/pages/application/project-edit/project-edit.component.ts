import { Component } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent {
  disabled: boolean = false;
  touchUi: boolean = false;
  colorCtr: any;
  color: any;
}
