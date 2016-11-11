import { Component, OnInit } from '@angular/core';
import { AuthService} from '../shared/services/auth.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
  logout() {
    this._authService.logout().subscribe(
      data => {
        console.log("logged out")
      },
      error => {
        console.error(error)
      },
      () => {
        console.log("This observable is completed")
      });
  }
}
