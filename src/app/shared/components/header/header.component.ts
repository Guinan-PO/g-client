import { AuthenticationService } from './../../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public readonly logoSource = '../../../assets/GuinanHeader.png';
  public readonly userDefaultProfilePice =
    '../../../assets/profile-default.png';

  @Input() profilePicInput: string = this.userDefaultProfilePice;

  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public navigateToUrl(url: string = '/') {
    this.router.navigateByUrl(url);
  }

  public logout() {
    this.authService.logout();
  }
}
