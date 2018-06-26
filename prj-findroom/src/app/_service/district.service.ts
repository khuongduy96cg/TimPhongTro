import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DistrictService {
    constructor(private http: Http) { }

    getDistrictsByProvinceId(cpid : number){
        return this.http.get('/district/provinceid/' + cpid)
            .map(res => res.json());
    }
    //
    getDistrictById(cid){
        return this.http.get('/district/' + cid)
            .map(res => res.json());
    }
    //them
    addNewDistrict(newDistrict) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/district/addnewdistrict', newDistrict, { headers: headers })
            .map(res => res.json());
    }
    //
    updateDistrict(cid, newDistrict) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/district/updatedistrict/' + cid, newDistrict, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteDistrict(cid) {
        return this.http.delete('/district/deletedistrict/' + cid)
            .map(res => res.json());
    }

}