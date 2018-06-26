import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TypeService {

    constructor(private http: Http) { }
    //Các hàm gọi lên server và nhận kết quả trả về cho component sử dụng

    getTypes() {
        return this.http.get('/type')
            .map(res => res.json());
    }
    //get first row of types
    getFirstRowType(){
        return this.http.get('/type/getfirstrow')
            .map(res => res.json());
    }
    //
    getTypeById(cid){
        return this.http.get('/type/' + cid)
            .map(res => res.json());
    }
    //them
    addNewType(newType) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/type/addnewtype', newType, { headers: headers })
            .map(res => res.json());
    }
    //
    updateType(cid, newType) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/type/updatetype/' + cid, newType, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteType(cid) {
        return this.http.delete('/type/deletetype/' + cid)
            .map(res => res.json());
    }

}