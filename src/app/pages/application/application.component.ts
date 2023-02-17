import {Component, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {

  }


}
