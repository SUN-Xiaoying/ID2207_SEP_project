import { 
  Component, 
  //Input,
  //Output,
  //EventEmitter 
} from '@angular/core';

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
  loginForm: FormGroup;
  formCtrl : AbstractControl;

  // constructor(fb:FormBuilder, public authService: AuthService) {
  constructor(public authService: AuthService) {

    this.message = '';
    // this.loginForm = fb.group(
    //   {
    //     'uname':['CS', Validators.required],
    //     'psw':['cs123', Validators.required]
    //   }
    // );

    // this.formCtrl = this.loginForm.controls['uname'];

    // this.users = [
    //   new User( 'CS', 'cs'),
    //   new User( 'SCS', 'scs'),
    //   new User( 'HR', 'hr'),
    //   new User( 'FM', 'fm'),
    //   new User( 'PM', 'pm' )
    // ];// 'CS', 'SCS', 'HR', 'FM', 'PM', 'SM', 'AM'];
  }

  // login(username:HTMLInputElement, password:HTMLInputElement):boolean{
  login(username:string, password:string):boolean{
    this.message = '';
    if(!this.authService.login(username, password)) {
      this.message = 'Invalid credentials!';
      setTimeout(function(){
        this.message = 'Time out!'
      }.bind(this), 2500);
    }
    console.log(`Enter user: ${username} and password: ${password}`);
    return false;
  }

  logout():boolean{
    this.authService.logout();
    return false;
  }
}
