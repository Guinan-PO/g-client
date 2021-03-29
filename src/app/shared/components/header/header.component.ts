import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public readonly logoSource = '../../../assets/GuinanHeader.png';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateToUrl(url: string = '/') {
    this.router.navigateByUrl(url);
  }
}
