import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";
import {BoardService} from "../../../core/services/board.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit{

  constructor(
    private _formBuilder: FormBuilder,
    private boardService: BoardService,
    public dialogRef: MatDialogRef<any>,
  @Inject(MAT_DIALOG_DATA) public data: {boardId: number, boardName: string}
  ) {
  }

  ngOnInit() {
    if (this.data.boardId) {

      this.boardService.getBoardByID(this.data.boardId).subscribe(res => {

        this.form.patchValue(res);
        res.columns.forEach((column: any) => {
          this.colsArray.push(new FormGroup({
            id: new FormControl(column.id),
            name: new FormControl(column.name, Validators.required),
            description: new FormControl(column.description, Validators.required),
            position: new FormControl(column.position, Validators.required),
            taskStatus: new FormControl(column.taskStatus, Validators.required)
          }, Validators.required));
        })
      })

    }

  }

  injectForm = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    taskStatus: ['', Validators.required],
  });

  form: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    position: 0,

    columns: this._formBuilder.array([]),
  });

  get colsArray() {
    return <FormArray>this.form.get('columns');
  }

  addCol() {
    this.colsArray.push(this.injectForm);
    this.dialogRef.close(this.form);
  }
}
