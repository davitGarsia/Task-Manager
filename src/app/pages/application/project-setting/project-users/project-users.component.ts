import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IBoard, User} from "../../../../core/interfaces";
import {Observable, Subject, takeUntil} from "rxjs";
import {ProjectService} from "../../../../core/services/project.service";
import {ProjectFacade} from "../../../../facades/project-facade.service";
import {UsersFacadeService} from "../../../../facades/users-facade.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../core/services/users.service";

@Component({
  selector: 'app-project-users',
  templateUrl: './project-users.component.html',
  styleUrls: ['./project-users.component.scss']
})
export class ProjectUsersComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'firstName', 'lastName','email', 'isActive','actions']
  dataSource = new MatTableDataSource<IBoard>();
  sub$ = new Subject();
  chooseUserActive = false;
  users$: Observable<User[]>= this.userService.getUsersAll()
  projectUsersIds: number[] = [];

  get projectId() {
    return this.projectFacade.getProject().id
  }

  constructor(
    private projectService: ProjectService,
    private projectFacade: ProjectFacade,
    private userFacade: UsersFacadeService,
    private userService: UsersService,
  ) {
  }

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(null, [Validators.required]),
  });

  getCurrentProjectUsers() {
    this.projectService.getProjectUsers(this.projectId)
      .pipe(takeUntil(this.sub$))
      .subscribe(users => {
        this.projectUsersIds = users.map((user: User) => user.id)
        this.dataSource.data = users
      })
  }


  ngOnInit(): void {
    this.getCurrentProjectUsers()
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  removeUser(id: number) {
const userIds = this.projectUsersIds.filter((userId: number) => userId !== id)
    this.projectService.addProjectUser({
      projectId: this.projectId,
      userIds
    })
      .pipe(takeUntil(this.sub$))
      .subscribe(() => {
        this.getCurrentProjectUsers()
      })
  }


  addUser()  {
    this.chooseUserActive = !this.chooseUserActive;

  }

  onSubmit() {
    const userIds = [ ...this.projectUsersIds, this.userForm.value.userId]
    this.projectService.addProjectUser({
      projectId: this.projectId,
      userIds
    })
      .pipe(takeUntil(this.sub$))
      .subscribe(() => {
        this.getCurrentProjectUsers()
        this.addUser()

      })
  }
}