import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'scs',
  templateUrl: './scs.component.html',
  styleUrls: ['./scs.component.css']
})
export class SCSComponent{

  constructor( private formService: FormService) { }

  updateStatus(token:HTMLInputElement, newstatus:HTMLInputElement):void{
    this.formService.updateStatus(token, newstatus);
  }

  redirectToFM(token:HTMLInputElement){
    this.formService.redirectTo(token, 'FM');
  }

}
