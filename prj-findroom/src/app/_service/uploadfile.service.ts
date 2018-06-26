import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UploadFileService {
    constructor(private http: Http) { }

    removeFile(cname: string){
        return this.http.get('/uploadfile/remove/api/' + cname)
            .map(res => res.json());
    }
}