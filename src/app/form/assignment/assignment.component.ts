import { Component, Input } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignService } from 'src/app/services/assign.service'

@Component({
  selector: 'assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent{

  @Input() task : Assignment;

  constructor(private assignService: AssignService ) { }


  sendTask(type:string, ref:HTMLInputElement, assign:HTMLInputElement, priority:HTMLInputElement){
    let reference = (<HTMLInputElement>document.getElementById("ref")).value;
    let assigner = (<HTMLInputElement>document.getElementById("assign")).value;
    let prio = (<HTMLInputElement>document.getElementById("priority")).value;

    let _ref = reference.toString();
    let _assign = assigner.toString();
    let _priority = prio.toString();

    let newtask = new Assignment(type, _ref, _assign, _priority);
    this.assignService.addRequest(newtask);
    window.alert(type+' Task has been assigned to '+_assign);
  }

}
