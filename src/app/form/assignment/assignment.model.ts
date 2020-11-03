export class Assignment{
    type : string;
    ref : string;
    assign : string;
    priority : string;

    constructor(type:string, ref:string, assign:string, priority:string){
        this.type = type;
        this.ref = ref;
        this.assign = assign;
        this.priority = priority;
    }
}