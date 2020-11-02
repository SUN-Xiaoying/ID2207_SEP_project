export class RecruitmentRequest{
    record : string;
    title : string;
    status : string;

    constructor(record:string, title:string, status:string){
        this.record = record;
        this.title = title;
        this.status = status;
    }
}