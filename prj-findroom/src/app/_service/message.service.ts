import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MessageService {

    constructor(private http: Http) { }
    //Các hàm gọi lên server và nhận kết quả trả về cho component sử dụng

    getMessages() {
        return this.http.get('/message')
            .map(res => res.json());
    }
    //
    getMessageById(cid){
        return this.http.get('/message/' + cid)
            .map(res => res.json());
    }
    getMessageByStatus(cstatus){
        return this.http.get('/message/status/' + cstatus)
            .map(res => res.json());
    }
    //them
    addNewMessage(newMessage) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/message/addnewmessage', newMessage, { headers: headers })
            .map(res => res.json());
    }
    //
    updateMessage(cid, newMessage) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/message/updatemessage/' + cid, newMessage, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteMessage(cid) {
        return this.http.delete('/message/deletemessage/' + cid)
            .map(res => res.json());
    }

}