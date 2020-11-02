import { Component } from '@angular/core';

import{ 
  AbstractControl,
  FormBuilder, 
  FormGroup, 
  Validators
}from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  message: string;

  constructor(public authService: AuthService) {

    this.message = '';
  }

 login(username:HTMLInputElement, password:HTMLInputElement):string{
    this.message = '';
    if(this.authService.login(username, password) == 'failed') {
      this.message = 'Invalid credentials!';
      setTimeout(function(){
        this.message = 'Time out!'
      }.bind(this), 2500);
    }
    return 'Failed';
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }
}
