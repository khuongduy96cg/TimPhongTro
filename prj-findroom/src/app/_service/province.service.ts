import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProvinceService {
    constructor(private http: Http) { }

    getAllProvinces() {
        return this.http.get('/province')
            .map(res => res.json());
    }
    //
    getProvinceById(cid){
        return this.http.get('/province/' + cid)
            .map(res => res.json());
    }
    //them tinh thanh
    addNewProvince(newProvince) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/province/addnewprovince', newProvince, { headers: headers })
            .map(res => res.json());
    }
    //
    updateProvince(cid, newProvince) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/province/updateprovince/' + cid, newProvince, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteProvince(cid) {
        return this.http.delete('/province/deleteprovince/' + cid)
            .map(res => res.json());
    }
}