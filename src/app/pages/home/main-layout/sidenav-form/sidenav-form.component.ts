import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../../../../core/services/drawer.service';
import { ControlProjectsService } from '../../../../core/services/control-projects.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidenav-form',
  templateUrl: './sidenav-form.component.html',
  styleUrls: ['./sidenav-form.component.scss'],
})
export class SidenavFormComponent implements OnInit {
  constructor(
    private drawerService: DrawerService,
    private controlProjectsService: ControlProjectsService
  ) {}

  ngOnInit(): void {}

  closeDrawer() {
    this.drawerService.closeDrawer();
  }

  projectForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    abbr: new FormControl(null),
    description: new FormControl(null),
    color: new FormControl(null),
  });

  onSubmit() {
    // const payload = this.projectForm.value;
    // console.log(payload);
    // this.controlProjectsService.addProject(payload).subscribe({
    //   next: res => console.log(res)
    // })
  }
}
