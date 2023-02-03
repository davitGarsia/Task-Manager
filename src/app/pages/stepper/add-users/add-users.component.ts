import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  stepperService: any;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  usersFormGroup = this._formBuilder.group({
    firsName: ['', Validators.required],
    lastName: ['', Validators.required],
    idNumber: ['', Validators.required],
    email: ['', Validators.required],
    mobNumber: ['', Validators.required],
  });
  isEditable = true;

  Submit() {
    this.stepperService.openNextStep(1);
  }
}
