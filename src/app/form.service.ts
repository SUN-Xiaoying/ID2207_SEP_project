import { Injectable } from '@angular/core';
import { EventRequest } from './event-request/event-request.model';

@Injectable({
    providedIn: 'root'
})

export class FormService {

    events : EventRequest[] = [];

    addEvent(event:EventRequest){
        this.events.push(event);
    }

    getList(){
        return this.events;
    }

    clearList(){
        this.events = [];
        return this.events;
    }

}

export const FORM_SERVICE: Array<any> = [
    FormService
];