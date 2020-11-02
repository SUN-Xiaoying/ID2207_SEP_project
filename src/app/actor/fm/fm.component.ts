import { Component } from '@angular/core';
import { from } from 'rxjs';
import { EventRequest } from 'src/app/form/event-request/event-request.model';
import { FinancialRequest } from 'src/app/form/financial/financial.model'

import { FormService } from 'src/app/services/form.service';
import { FinancialService } from 'src/app/services/financial.service'

@Component({
  selector: 'fm',
  templateUrl: './fm.component.html',
  styleUrls: ['./fm.component.css']
})

export class FMComponent{

  t_event:boolean = false;
  t_financial:boolean = false;
  fmEvents : EventRequest[]=[];
  fRequests : FinancialRequest[]=[];

  constructor( private formService: FormService ) {
    this.fmEvents = this.formService.fmEvents;
   }

 
   toggleEvent(){
     this.t_event = !this.t_event;
   }
   showEvent():boolean{
     return this.t_event;
   } 
 
   toggleFinancial(){
     this.t_financial = !this.t_financial;
   }
   showFinancial():boolean{
     return this.t_financial;
   }

   updateStatus(token:HTMLInputElement, newstatus:HTMLInputElement){
    this.formService.updateStatus(token, newstatus);
   }

   redirectToAM(token:HTMLInputElement){
    this.formService.redirectTo(token, 'AM');
   }

}
