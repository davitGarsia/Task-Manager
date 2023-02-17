import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../core/services/project.service";
import {Observable} from "rxjs";
import {IProject} from "../../../core/interfaces/iproject";
import {Router} from "@angular/router";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
}




