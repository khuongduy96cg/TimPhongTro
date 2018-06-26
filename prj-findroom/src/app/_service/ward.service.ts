import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class WardService {

    constructor(private http: Http) { }

    getWardsByDistrictId(cdid : number){
        return this.http.get('/ward/districtid/' + cdid)
            .map(res => res.json());
    }
    //
    getWardById(cid){
        return this.http.get('/ward/' + cid)
            .map(res => res.json());
    }
    //them
    addNewWard(newWard) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/ward/addnewward', newWard, { headers: headers })
            .map(res => res.json());
    }
    //
    updateWard(cid, newWard) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/ward/updateward/' + cid, newWard, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteWard(cid) {
        return this.http.delete('/ward/deleteward/' + cid)
            .map(res => res.json());
    }

}