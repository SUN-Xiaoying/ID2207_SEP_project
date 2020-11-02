import { Route } from '@angular/compiler/src/core';
import { Component} from '@angular/core';
import { 
  ActivatedRoute, 
  Router } from '@angular/router';
import { from } from 'rxjs';

import { FormService } from '../form.service';

@Component({
  selector: 'pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})

export class PMComponent{


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private formService: FormService){
  }

}




