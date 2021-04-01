import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material/form-field';

@Component({
  selector: 'app-create-board-form',
  templateUrl: './create-board-form.component.html',
  styleUrls: ['./create-board-form.component.css']
})
export class CreateBoardFormComponent implements OnInit {
  public _boardCreateForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl(''),
    description: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  public submit(): void {
    console.log(this._boardCreateForm.value);
  }
}
