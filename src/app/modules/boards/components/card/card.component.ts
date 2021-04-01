import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardSubtitle: string;
  @Input() cardContentText: string;

  constructor() {}

  ngOnInit(): void {}
}
