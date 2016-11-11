import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import {Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
form:FormGroup;
  constructor(private _authService: AuthService, private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'email':['',[Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'password': ['', Validators.required]
    })
  }
  isErrorVisible(){

  }
  onSubmit(){
    const user = new User(null, null, this.form.value.email, this.form.value.password);
    this._authService.login(user)
    .subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigate(['/home']);
      },
      error=>{console.error(error)},
      ()=>{console.log("login complete")}
    )
  }
}
