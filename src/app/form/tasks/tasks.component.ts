import { Component } from '@angular/core';
import { Assignment } from 'src/app/form/assignment/assignment.model'
import { AssignService } from 'src/app/services/assign.service'
import { from } from 'rxjs';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks : Assignment[] = [];

  constructor(private assignService: AssignService) { 
    this.tasks = this.assignService.tasks;
  }


}
