export class User {
    _id?:string = 'user' + Date.now();
    email:string;
    name:string;
    password:string;
    phone:string;
    birthday:string = '0003-02-01'; // yyy-mm-dd
    address:string;
    roleid:number;
    status:string;
    moreinformation:string;
    manage:{
        provinceid:number;
        districtid:number;
    };
    savedroom : [string];
}