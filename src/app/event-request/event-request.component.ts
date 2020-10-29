import { 
  Component,
  HostBinding,
  Input
} from '@angular/core';

import {EventRequest} from './event-request.model';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.css']
})

// export class EventRequestComponent implements OnInit {
export class EventRequestComponent {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() event : EventRequest;
  
  events : EventRequest[];

  constructor(){
    this.events = [
      new EventRequest('1', 'Aa', 'waiting'),
      new EventRequest('2', 'Bb', 'waiting'),
    ];
  }

  addEvent(record_num:HTMLInputElement, client_name:HTMLInputElement, status:HTMLInputElement):boolean{
    console.log(`New Record No: ${record_num.value} and Client name: ${client_name.value}`);
    this.events.push(new EventRequest(record_num.value, client_name.value, status.value));
    record_num.value ='';
    client_name.value='';
    status.value=''
    return false;
  }

}
