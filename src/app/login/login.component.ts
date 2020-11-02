import { Component } from '@angular/core';

import {EventRequest} from '../event-request/event-request.model';

import{ 
  AbstractControl,
  FormBuilder, 
  FormGroup, 
  Validators
}from '@angular/forms';

import { AuthService } from '../auth.sevice';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  message: string;
  // loginForm: FormGroup;
  // formCtrl : AbstractControl;

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
    else if(this.authService.login(username, password) == 'CS'){

    }
    console.log(`Enter user: ${username} and password: ${password}`);
    return 'Failed';
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }
}
