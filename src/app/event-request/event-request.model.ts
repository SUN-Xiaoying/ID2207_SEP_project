export class EventRequest{
    record : string;
    cname : string;
    status : string;

    constructor(record:string, cname:string, status:string){
        this.record = record;
        this.cname = cname;
        this.status = status;
    }
}