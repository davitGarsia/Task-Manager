import { Component, OnInit } from '@angular/core';
import {UsersFacadeService} from "../../core/services/facade/users-facade.service";
import {UsersService} from "../../core/services/users.service";
import {User} from "../../core/interfaces";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private userService: UsersFacadeService,
    private projectService: UsersFacadeService,
    private usersServices: UsersService

  ) { }
users: User[] = [];
  ngOnInit(): void {
    this.usersServices.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res;
        localStorage.setItem('users', JSON.stringify(res));
      }
    })
  }




}
