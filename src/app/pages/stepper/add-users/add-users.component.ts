import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StepperNextService} from 'src/app/core/services/stepper.next.service';
import {UsersService} from 'src/app/core/services/users.service';
import {map, Observable, startWith} from "rxjs";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {User} from "../../../core/interfaces";
import {ControlProjectsService} from "../../../core/services/control-projects.service";
import {MatStepper} from "@angular/material/stepper";
import {noWhitespaceValidator} from "../../../core/validators/whitespace.validator";

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  panelOpenState = false;

  diameter: number = 30;
  spinner: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private stepperService: StepperNextService,
    private usersService: UsersService,
    private controlProject: ControlProjectsService
  ) {
    this.filteredMails = this.mailCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.mails.slice())),
    );
  }

  usersFormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    lastName: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator]],
    // identityNumber: ['', [Validators.required, Validators.minLength(11)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    mobileNumber: [
      '',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12),
        Validators.pattern('[0-9]+'),
      ],
    ],
  });
  isEditable = true;

  @Input('stepper') stepper!: MatStepper;

  onSubmit() {
    this.spinner = true;
    this.makeIdsArray();

    this.currentUsersOnProject(null, this.projectUsers);
  }

  currentUsersOnProject(res: User | null, projectUsers?: any) {
    this.controlProject.getUsersFromProject().subscribe(resp => {
      resp.forEach((user: User) => {
        this.currentUsers.push(String(user.id));
      })
      this.controlProject.addUsersToProject(res ? {
        projectId: this.projectUsers.get('projectId')?.value,
        userIds: [...this.currentUsers, String(res?.id)]
      } : {
        projectId: this.projectUsers.get('projectId')?.value,
        userIds: [...this.currentUsers, ...projectUsers.get('userIds')?.value]
      }).subscribe(response => {
        this.spinner = false;
        this.stepperService.navigateToNextStep(this.stepper);
        this.stepperService.changeFromLinear();

        this.stepperService.openNextStep(4);

        setTimeout(() => {
          this.stepperService.changeToLinear();
        }, 1000);
        if (res) {
          this.title = 'User Created';
          setTimeout(() => {
            this.title = 'Create User';
          }, 3000);
        }
      })
    })
  }

  currentUsers: string[] = [];
  title: string = 'Create User';

  createAddUser() {
    this.usersService.setUser(this.usersFormGroup.value).subscribe({
      next: (res: any) => {
        this.currentUsersOnProject(res);
      }
    });
  }

  goBack() {
    this.stepperService.changeFromLinear();
    this.stepperService.openNextStep(2);

    setTimeout(() => {
      this.stepperService.changeToLinear();
    }, 500);
    if (this.usersFormGroup.valid) {
      this.stepperService.complete.next(true);
    }
    this.stepperService.complete.next(false);
  }

  ngOnInit() {
    this.getUsers();
  }


  separatorKeysCodes: number[] = [ENTER, COMMA];
  mailCtrl = new FormControl('');
  filteredMails?: Observable<string[]>;
  mails: string[] = [];
  usersMails: string[] = [];
  usersMailsControl = new FormControl([]);
  users: User[] = [];
  usersIds: string[] = []

  @ViewChild('mailInput') mailInput?: ElementRef<HTMLInputElement>;

  projectUsers = new FormGroup({
    projectId: new FormControl(localStorage.getItem('project') ? JSON.parse(localStorage.getItem('project')!).id : ''),
    userIds: new FormControl<string[]>(this.usersIds)
  })

  getUsers() {
    this.usersService.getUsersAll()
      .subscribe(users => {
        this.users = users;
        users.map((user: User) => this.usersMails.push(user.email))
      })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.mails.push(value);
    }

    event.chipInput!.clear();

    this.mailCtrl.setValue(null);
  }

  remove(mail: string): void {
    const index = this.mails.indexOf(mail);

    if (index >= 0) {
      this.mails.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.mails.push(event.option.viewValue);
    this.mailInput!.nativeElement.value = '';
    this.mailCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.usersMails.filter(mail => mail.toLowerCase().includes(filterValue));
  }

  makeIdsArray() {
    this.usersMailsControl.value?.forEach(mail => {
      this.users.forEach(user => {
        return user.email === mail ? this.usersIds.push(String(user.id)) : null;
      })
    })
  }
}
