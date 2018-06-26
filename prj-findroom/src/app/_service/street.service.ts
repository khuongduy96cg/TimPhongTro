import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class StreetService {

    constructor(private http: Http) { }

    getStreetsByWardId(cwid : number){
        return this.http.get('/street/wardid/' + cwid)
            .map(res => res.json());
    }
    //
    getStreetById(cid){
        return this.http.get('/street/' + cid)
            .map(res => res.json());
    }
    //them
    addNewStreet(newStreet) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/street/addnewstreet', newStreet, { headers: headers })
            .map(res => res.json());
    }
    //
    updateStreet(cid, newStreet) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/street/updatestreet/' + cid, newStreet, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteStreet(cid) {
        return this.http.delete('/street/deletestreet/' + cid)
            .map(res => res.json());
    }

}