import { Component } from '@angular/core';
import { FinancialRequest } from 'src/app/form/financial/financial.model'
import { FinancialService } from 'src/app/services/financial.service'

@Component({
  selector: 'financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent {

  fmRequests : FinancialRequest[]=[];
  
  constructor( private financialService: FinancialService ) { 
    this.fmRequests = this.financialService.requests;
  }

}
