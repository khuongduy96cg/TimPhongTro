import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class NeedService {

    constructor(private http: Http) { }
    //Các hàm gọi lên server và nhận kết quả trả về cho component sử dụng

    getNeeds() {
        return this.http.get('/need')
            .map(res => res.json());
    }
    //
    getNeedById(cid){
        return this.http.get('/need/' + cid)
            .map(res => res.json());
    }
    //them
    addNewNeed(newNeed) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/need/addnewneed', newNeed, { headers: headers })
            .map(res => res.json());
    }
    //
    updateNeed(cid, newNeed) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/need/updateneed/' + cid, newNeed, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteNeed(cid) {
        return this.http.delete('/need/deleteneed/' + cid)
            .map(res => res.json());
    }

}