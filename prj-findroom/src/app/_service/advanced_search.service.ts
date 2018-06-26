import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AdvancedSearchService {

    constructor(private http: Http) { }

    getRoomWithAdvancedSearch(csearch){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/room/adv_search', csearch, { headers: headers })
            .map(res => res.json());
    }
}