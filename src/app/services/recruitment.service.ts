import { Injectable } from '@angular/core';
import { RecruitmentRequest } from '../form/recruitment/recruitment.model';

@Injectable({
    providedIn: 'root'
})

export class RecruitmentService{

    public requests : RecruitmentRequest[] = [];

    public addEvent(event:RecruitmentRequest):void {
        this.requests.push(event);
    }

    getList(){
        return this.requests;
    }

    clearList(){
        this.requests = [];
        return this.requests;
    }

    // updateBudget(token:HTMLInputElement, newbudget:HTMLInputElement){
    //     let take= (<HTMLInputElement>document.getElementById("token")).value;
    //     let currbudget = (<HTMLInputElement>document.getElementById("newbudget")).value;
    //     let _token = take.toString();
    //     let _newbudget = currbudget.toString();
    //     let index = parseInt(_token);
    //     this.requests[index-1].budget = _newbudget;
    //     window.alert("Request "+_token+" has been changed!");
    // }

}

export const RECRUITMENT_SERVICE: Array<any> = [
    RecruitmentService
];