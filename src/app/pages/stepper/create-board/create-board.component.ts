import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss'],
})
export class CreateBoardComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  boardFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    position: 0,
    columns: this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      position: 0,
      boardId: 0,
      taskStatus: 'ToDo',
    }),
  });
}
