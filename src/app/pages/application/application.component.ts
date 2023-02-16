import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {User} from "../../core/interfaces";
import {ProjectFacadeService} from "../../core/services/project-facade.service";
import {UsersFacadeService} from "../../facades/users-facade.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private userService: UsersFacadeService,
    private projectService: UsersFacadeService,
    private usersServices: UsersService,
    private projectFacadeService: ProjectFacadeService


  ) { }
users: User[] = [];
  ngOnInit(): void {
    this.usersServices.getUsers().subscribe({
      next: (res) => {
        console.log(res);
      }
    });
    console.log(this.users);
  }


getProjects( ) {
  this.projectFacadeService.getProjects().subscribe({
    next: (res) => {
      console.log(res);
    }
  });

  };






}
