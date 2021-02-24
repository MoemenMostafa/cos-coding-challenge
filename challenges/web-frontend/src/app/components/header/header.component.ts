import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedInUser.subscribe(
      (auth) => {
        if (auth) { this.isLoggedIn = true; }
        if (!auth) { this.isLoggedIn = false; }
      }
    );
  }

  logout() {
    this.authService.logout();
    location.reload();
  }

}
