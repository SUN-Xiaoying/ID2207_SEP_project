import { Route } from '@angular/compiler/src/core';
import { Component} from '@angular/core';
import { 
  ActivatedRoute, 
  Router } from '@angular/router';

import { EventRequest } from 'src/app/form/event-request/event-request.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})

export class PMComponent{

  t_recruit:boolean = false;
  t_financial:boolean = false;

  toggleRecruitment(){
    this.t_recruit = !this.t_recruit;
  }
  showRecruitment():boolean{
    return this.t_recruit;
  } 

  toggleFinancial(){
    this.t_financial = !this.t_financial;
  }
  showFinancial():boolean{
    return this.t_financial;
  }
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private formService: FormService){
  }


}




