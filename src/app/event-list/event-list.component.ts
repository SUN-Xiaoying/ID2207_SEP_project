import { 
  Component, 
  OnInit,
  HostBinding,
  Input 
} from '@angular/core';

import { EventRequest } from '../event-request/event-request.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() event:EventRequest;

  ngOnInit(): void {
  }

}
