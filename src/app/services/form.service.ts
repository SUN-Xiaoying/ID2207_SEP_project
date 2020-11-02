import { Injectable } from '@angular/core';
import { EventRequest } from '../form/event-request/event-request.model';

@Injectable({
    providedIn: 'root'
})

export class FormService {

    public events : EventRequest[] = [];
    public pmEvents : EventRequest[] = [];
    public fmEvents : EventRequest[] = [];
    public amEvents : EventRequest[] = [];

    isExist(record:string):string{
        var i=0;
        for(i=0; i<this.events.length; i++){
            if(this.events[i].record == record){
                return i.toString();
            }
        }
        return '-1';
    }

    public addEvent(event:EventRequest):void {
        if(this.isExist(event.record)=='-1'){
            this.events.push(event);
        }
        else{
            var i= parseInt(this.isExist(event.record));
            this.events[i] = event;
        }
    }

    getList(){
        return this.events;
    }

    clearList(){
        this.events = [];
        return this.events;
    }



    updateStatus(token:HTMLInputElement, newstatus:HTMLInputElement){
        let take= (<HTMLInputElement>document.getElementById("token")).value;
        let currstatus = (<HTMLInputElement>document.getElementById("newstatus")).value;
        let _token = take.toString();
        let _newstatus = currstatus.toString();
        let index = parseInt(_token);
        this.events[index-1].status = _newstatus;
        window.alert("Form "+_token+" has been changed!");
    }

    redirectTo(token:HTMLInputElement, actor:string){
        let take= (<HTMLInputElement>document.getElementById("token")).value;
        let _token = take.toString();
        let index = parseInt(_token);

        if(actor=='FM'){
            this.fmEvents.push(this.events[index-1]);
            window.alert("Form "+_token+" sent to FM!");
        }
        else if(actor=='AM'){
            this.amEvents.push(this.events[index-1]);
            window.alert("Form "+_token+" sent to AM!");
        }
        else if(actor=='SCS'){
            this.events.push(this.events[index-1]);
            window.alert("Form "+_token+" sent to SCS!");
        }
    }
}

export const FORM_SERVICE: Array<any> = [
    FormService
];