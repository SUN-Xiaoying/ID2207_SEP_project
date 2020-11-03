import { Component, Input } from '@angular/core';
import { FinancialService } from 'src/app/services/financial.service'
import { FinancialRequest } from './financial.model';

@Component({
  selector: 'financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent {

  @Input() request : FinancialRequest;

  constructor(private financialService: FinancialService) { }
  addFinancial(record:HTMLInputElement, ref:HTMLInputElement, budget:HTMLInputElement){
    console.log(`New Record No: ${record.value}`);
    let recordnumber = (<HTMLInputElement>document.getElementById("record")).value;
    let reference = (<HTMLInputElement>document.getElementById("ref")).value;
    let budg = (<HTMLInputElement>document.getElementById("budget")).value;

    let _record = recordnumber.toString();
    let _ref = reference.toString();
    let _budget = budg.toString();

    let finarequest = new FinancialRequest(_record, _ref, _budget);
    this.financialService.addRequest(finarequest);
    window.alert('Financial request has been sent to FM');
  }

}
