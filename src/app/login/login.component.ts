import { 
  Component, 
  //Input,
  //Output,
  //EventEmitter 
} from '@angular/core';

import{ 
  AbstractControl,
  FormBuilder, 
  FormControl, 
  FormGroup, 
  Validators
}from '@angular/forms';

import {User} from '../user/user.model'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;
  formCtrl : AbstractControl;
  //@Input() user : User;
  //users : User[];



  constructor(fb:FormBuilder) {

    //let control = new FormControl('acc', Validators.required);

    this.loginForm = fb.group(
      {
        'acc':['CS', Validators.required],
        'psw':['cs123', Validators.required]
      },{
        'acc':['SCS', Validators.required],
        'psw':['scs123', Validators.required]
      }
    );

    this.formCtrl = this.loginForm.controls['acc'];

    // this.users = [
    //   new User( 'CS', 'cs'),
    //   new User( 'SCS', 'scs'),
    //   new User( 'HR', 'hr'),
    //   new User( 'FM', 'fm'),
    //   new User( 'PM', 'pm' )
    // ];// 'CS', 'SCS', 'HR', 'FM', 'PM', 'SM', 'AM'];
  }

  // login(account:HTMLInputElement, password:HTMLInputElement):boolean{
  //   console.log(`Enter user: ${account.value} and password: ${password.value}`);
  //   return false;
  // }

  onSubmit(form:any):void{
    console.log('Submitted form: ', form);
  }
}
