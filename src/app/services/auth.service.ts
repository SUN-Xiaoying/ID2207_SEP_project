import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    login(username:HTMLInputElement, password:HTMLInputElement) : string {
        let name = (<HTMLInputElement>document.getElementById("username")).value;
        let psw = (<HTMLInputElement>document.getElementById("password")).value;
        let _name = name.toString();
        let _psw = psw.toString();
        console.log(`Enter user: ${_name} and password: ${_psw}`);
        if (_name== 'username' && _psw == 'password'){
            localStorage.setItem('username', _name);
            return 'username';
        }
        else if (_name== 'CS' && _psw == '123'){
            localStorage.setItem('username', _name);
            return 'CS';
        }
        else if (_name== 'SCS' && _psw == '123'){
            localStorage.setItem('username', _name);
            return 'SCS';
        }
        else if (_name== 'PM' && _psw == '123'){
            localStorage.setItem('username', _name);
            return 'PM';
        }
        else if (_name== 'FM' && _psw == '123'){
            localStorage.setItem('username', _name);
            return 'FM';
        }
        else if (_name== 'AM' && _psw == '123'){
            localStorage.setItem('username', _name);
            return 'AM';
        }
        else
            return 'failed';
    }

    logout():any{
        localStorage.removeItem('username');
    }

    getUser():any{
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.getUser() != null;
    }
}


export const AUTH_PROVIDERS: Array<any> = [
    { provide:AuthService, useClass:AuthService}
];