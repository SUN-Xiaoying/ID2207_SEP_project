export class FinancialRequest{
    record : string;
    ref : string;
    budget : string;

    constructor(record:string, ref:string, budget:string){
        this.record = record;
        this.ref = ref;
        this.budget = budget;
    }
}