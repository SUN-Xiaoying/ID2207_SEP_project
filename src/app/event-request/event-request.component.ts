import { 
  Component,
  HostBinding,
  Input
} from '@angular/core';

import {EventRequest} from './event-request.model';

import{ 
  AbstractControl,
  FormBuilder, 
  FormGroup,
  Validators
}from '@angular/forms';

import { FormService } from '../form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.css']
})

export class EventRequestComponent {

  eventForm: FormGroup;
  formCtrl: AbstractControl;
  
  @HostBinding('attr.class') cssClass = 'row';
  @Input() event : EventRequest;
  
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormService){

    this.eventForm = fb.group({
      'record':['',Validators.required],
      'cname':['',Validators.required],
      'status':['',Validators.required]
    });

    this.formCtrl = this.eventForm.controls['record'];
  }

  addEvent(record:HTMLInputElement, cname:HTMLInputElement, status:HTMLInputElement):boolean {
    console.log(`New Record No: ${record.value} and Client name: ${cname.value}`);
    let recordnumber = (<HTMLInputElement>document.getElementById("record")).value;
    let clientname = (<HTMLInputElement>document.getElementById("cname")).value;
    let stat = (<HTMLInputElement>document.getElementById("status")).value;
    let _record = recordnumber.toString();
    let _cname = clientname.toString();
    let _status = stat.toString();
    let eventform = new EventRequest(_record, _cname, _status);
    this.formService.addEvent(eventform);
    window.alert('Your form has been added');
    return false;
  }


  onSubmit(value:string): void{
    console.log('Submitted event: ', value);
  }

}
