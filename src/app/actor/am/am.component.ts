import { Component } from '@angular/core';
import { EventRequest } from 'src/app/form/event-request/event-request.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'am',
  templateUrl: './am.component.html',
  styleUrls: ['./am.component.css']
})
export class AMComponent{

  amEvents : EventRequest[] = [];

  constructor( private formService: FormService ) {
    this.amEvents = this.formService.amEvents;
   }

   updateStatus(token:HTMLInputElement, newstatus:HTMLInputElement){
    this.formService.updateStatus(token, newstatus);
   }

   redirectToSCS(token:HTMLInputElement){
    this.formService.redirectTo(token, 'SCS');
   }


}
