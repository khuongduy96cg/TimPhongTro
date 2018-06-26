import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UtilityService {

    constructor(private http: Http) { }
    //Các hàm gọi lên server và nhận kết quả trả về cho component sử dụng

    getUtilities() {
        return this.http.get('/utility')
            .map(res => res.json());
    }
    //
    getUtilityById(cid){
        return this.http.get('/utility/' + cid)
            .map(res => res.json());
    }
    //them
    addNewUtility(newUtility) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/utility/addnewutility', newUtility, { headers: headers })
            .map(res => res.json());
    }
    //
    updateUtility(cid, newUtility) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/utility/updateutility/' + cid, newUtility, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteUtility(cid) {
        return this.http.delete('/utility/deleteutility/' + cid)
            .map(res => res.json());
    }

}