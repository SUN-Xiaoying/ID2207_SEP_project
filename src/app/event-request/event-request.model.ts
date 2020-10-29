export class EventRequest{
    record_num : string;
    client_name : string;
    status : string;

    constructor(record_num:string, client_name:string, status:string){
        this.record_num = record_num;
        this.client_name = client_name;
        this.status = status;
    }

    //domain() is a utility function that extracts the domain from a URL

}