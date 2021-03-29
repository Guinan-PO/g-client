import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-home',
  templateUrl: './boards-home.component.html',
  styleUrls: ['./boards-home.component.css']
})
export class BoardsHomeComponent implements OnInit {
  public isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
