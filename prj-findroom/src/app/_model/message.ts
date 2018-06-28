import { _Status } from "../_const/_status";

export class Message {
    _id: string = "mes" + Date.now();
    messagesend : {
        by : {
            id : string;
            name:string;
            email : string;
        },
        content : string;
        date : string;
    };
    messagereply : {
        by : {
            id : string;
            name:string;
            email : string;
        },
        content : string;
        date : string;
    };
    status:string = _Status.Status_sent;
}