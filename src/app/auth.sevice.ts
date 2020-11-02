import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    login(username:HTMLInputElement, password:HTMLInputElement) : string {
        let name = (<HTMLInputElement>document.getElementById("username")).value;
        let psw = (<HTMLInputElement>document.getElementById("password")).value;
        let _name = name.toString();
        let _psw = psw.toString();
        if (_name== 'username' && _psw == 'password'){
            localStorage.setItem('username', _name);
            return 'username';
        }
        else if (_name== 'CS' && _psw == '12345'){
            localStorage.setItem('username', _name);
            return 'CS';
        }
        else if (_name== 'PM' && _psw == '12345'){
            localStorage.setItem('username', _name);
            return 'PM';
        }

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