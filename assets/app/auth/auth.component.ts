import { Component, OnInit } from '@angular/core';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
