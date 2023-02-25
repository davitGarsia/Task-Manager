import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {User} from "../../core/interfaces";
import {ProjectFacadeService} from "../../core/services/project-facade.service";
import {UsersFacadeService} from "../../facades/users-facade.service";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, AfterViewInit {
  private scrolledTop: boolean = false;
  private scrolled: boolean= true;

  constructor() {
  }

  ngOnInit(): void {

  }

  @ViewChild('project') project!: ElementRef;

  ngAfterViewInit() {
    this.project.nativeElement.addEventListener('scroll', () => {
      let firstElPos = this.project.nativeElement.firstChild.getBoundingClientRect().top;
      firstElPos <= -10 ? this.scrolled = true : this.scrolled = false;
      firstElPos <= -window.innerHeight ? this.scrolledTop = true : this.scrolledTop = false;
    })
  }


}
