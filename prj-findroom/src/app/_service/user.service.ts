import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

    constructor(private http: Http) { }

    getUsers(){
        return this.http.get('/user').map(res => res.json());
    }

    getAdmin(){
        return this.http.get('/user/adm').map(res => res.json());
    }

    getUsersByRoleId(croleid){
        return this.http.get('/user/roleid/' + croleid).map(res => res.json());
    }

    getUsersByRoleAndStatus(croleid,cstatus){
        return this.http.get('/user/roleandstatus/' + croleid + '/' + cstatus).map(res => res.json());
    }

    getUserById(cid:string){
        return this.http.get('/user/'+cid)
            .map(res => res.json());
    }

    //them
    addNewUser(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/user/addnewuser', newUser, { headers: headers })
            .map(res => res.json());
    }
    //
    updateUser(cid, newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/user/updateuser/' + cid, newUser, { headers: headers })
            .map(res => res.json());
    }
    //
    deleteUser(cid) {
        return this.http.delete('/user/deleteuser/' + cid)
            .map(res => res.json());
    }

    saveRoom(cid : string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/user/saveroom/' + cid, {}, { headers: headers })
            .map(res => res.json());
    }
    users : any[] = [
        // {
        //     "_id":1,
        //     "email":"user1@gmail.com",
        //     "name":"User 1",
        //     "password":"123456@",
        //     "phone":"0123456789",
        //     "birthday":"2018-05-04T15:31:54.767Z",
        //     "address":"Dia chi 1",
        //     "roleid":1,//member
        //     "districtid":0
        // },
        // {
        //     "_id":2,
        //     "email":"user2@gmail.com",
        //     "name":"User 2",
        //     "password":"123456@",
        //     "phone":"0123456789",
        //     "birthday":"2018-05-04T15:31:54.767Z",
        //     "address":"Dia chi 2",
        //     "roleid":1,//member
        //     "districtid":0
        // },
        // {
        //     "_id":3,
        //     "email":"user3@gmail.com",
        //     "name":"User 3",
        //     "password":"123456@",
        //     "phone":"0123456789",
        //     "birthday":"2018-05-04T15:31:54.767Z",
        //     "address":"Dia chi 3",
        //     "roleid":1,//member
        //     "districtid":0
        // },
        // {
        //     "_id":4,
        //     "email":"user4@gmail.com",
        //     "name":"User 4",
        //     "password":"123456@",
        //     "phone":"0123456789",
        //     "birthday":"2018-05-04T15:31:54.767Z",
        //     "address":"Dia chi 4",
        //     "roleid":1,//member
        //     "districtid":0
        // },
        // {
        //     "_id":5,
        //     "email":"user5@gmail.com",
        //     "name":"User 5",
        //     "password":"123456@",
        //     "phone":"0123456789",
        //     "birthday":"2018-05-04T15:31:54.767Z",
        //     "address":"Dia chi 5",
        //     "roleid":1,//member
        //     "districtid":0
        // }
    ]
}