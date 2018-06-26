import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RoomService {
    constructor(private http: Http) { }

    getAllRooms() {
        return this.http.get('/room')
            .map(res => res.json());
    }

    getDetailRoom(cid:string){
        return this.http.get('/room/detail_room/' + cid).map(res => res.json());
    }

    getRoomsByType(ctype: number) {
        return this.http.get('/room/type/' + ctype)
            .map(res => res.json());
    }
    getRoomsByStatus(cstatus: string){
        return this.http.get('/room/status/' + cstatus)
            .map(res => res.json());
    }
    getRoomByQuery(cprovinceid,cdistrictid,cstatus){

        return this.http.get('/room/query/'+ cprovinceid +'/' + cdistrictid + '/' + cstatus).map(res => res.json());
    }

    getRoomByQuery2(cprovinceid,cdistrictid){

        return this.http.get('/room/query2/'+ cprovinceid +'/' + cdistrictid).map(res => res.json());
    }

    //nha tro
    getRooms() {
        this.temp.push(this.rooms[0]);
        this.temp.push(this.rooms[2]);
        this.temp.push(this.rooms[3]);
        return this.temp;
    }
    //nha nguyen can
    getRooms2() {
        return this.rooms[1];
    }
    getRoomById(cid: string) {
        return this.http.get('/room/' + cid)
            .map(res => res.json());
    }
    //them phong
    addNewRoom(newRoom) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/room/addnewroom', newRoom, { headers: headers })
            .map(res => res.json());
    }
    
    feedback(newFeedback){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/room/feedback', newFeedback, { headers: headers })
            .map(res => res.json());
    }

    temp: any[] = []
    rooms: any[] = [
        {
            "_id": 1,
            "base": {
                "need": 2,
                "type": 1,
            },
            "detail": {
                "title": "KTX 400k/tháng gần Vinmark Cộng Hòa, Tân Bình",
                "phone": "0937554570",
                "price": "400,000",
                "area": 25,
                "province": 1,
                "district": 1,
                "ward": 1,
                "street": 1,
                "addressdetail": "Số 84 Giải Phóng, Phường 4, Tân Bình Giải Phóng - 04 - Tân Bình - Hồ Chí Minh"
            },
            "more": {
                "floor": 'Tang 1',
                "tolet": "Khep kin",
                "countpeople": "1 Nguoi",
                "electricprice": "Nha nuoc quy dinh",
                "waterprice": "Nha nuoc quy dinh",
                "countfloor": "",
                "counttolet": "",
                "countbedroom": "",
                "direction": "",
                "utility": [1, 2, 3, 4, 5, 6, 7],
                "imageurl": ["https://english4u.com.vn/Uploads/images/khach-san-riverside-quang-binh-8.jpg",
                    "http://chothuesaigon.net/chothuesg_2.20150116150643859.jpg",
                    "https://blog.mogi.vn/wp-content/uploads/2018/05/cho-thue-nha-nguyen-can-1.jpg"]
            },
            "description": "",
            "location": {
                "lat": 1,
                "long": 1
            }
        },
        {
            "_id": 2,
            "base": {
                "need": 1,
                "type": 2,
            },
            "detail": {
                "title": "KTX 400k/tháng gần Vinmark Cộng Hòa, Tân Bình 2",
                "phone": "0937554570",
                "price": "400,000",
                "area": 25,
                "province": 1,
                "district": 1,
                "ward": 1,
                "street": 1,
                "addressdetail": "Số 84 Giải Phóng, Phường 4, Tân Bình Giải Phóng - 04 - Tân Bình - Hồ Chí Minh"
            },
            "more": {
                "floor": "",
                "tolet": "",
                "countpeople": "",
                "electricprice": "",
                "waterprice": "",
                "countfloor": "3",
                "counttolet": "3",
                "countbedroom": "4",
                "direction": "Tây",
                "utility": [1, 2, 3, 4, 5, 6, 7],
                "imageurl": ["http://www.muabannhadat.vn/tin-tuc/wp-content/uploads/2011/11/sap-xep-phong-tro-theo-phong-thuy.jpg"]
            },
            "description": "",
            "location": {
                "lat": 1,
                "long": 1
            }
        },
        {
            "_id": 3,
            "base": {
                "need": 1,
                "type": 1,
            },
            "detail": {
                "title": "KTX 400k/tháng gần Vinmark Cộng Hòa, Tân Bình 3",
                "phone": "0937554570",
                "price": "400,000",
                "area": 25,
                "province": 1,
                "district": 1,
                "ward": 1,
                "street": 1,
                "addressdetail": "Số 84 Giải Phóng, Phường 4, Tân Bình Giải Phóng - 04 - Tân Bình - Hồ Chí Minh"
            },
            "more": {
                "floor": 'Tang 1',
                "tolet": "Khep kin",
                "countpeople": "1 Nguoi",
                "electricprice": "Nha nuoc quy dinh",
                "waterprice": "Nha nuoc quy dinh",
                "countfloor": "",
                "counttolet": "",
                "countbedroom": "",
                "direction": "",
                "utility": [1, 2, 3, 4, 5, 6, 7],
                "imageurl": ["http://xaynhachothue.vn/wp-content/uploads/2017/10/xthiet-ke-phong-tro-dep-2-1140x526_c.jpg.pagespeed.ic.imLhjEB9Pu.jpg"]
            },
            "description": "",
            "location": {
                "lat": 1,
                "long": 1
            }
        },
        {
            "_id": 4,
            "base": {
                "need": 1,
                "type": 1,
            },
            "detail": {
                "title": "KTX 400k/tháng gần Vinmark Cộng Hòa, Tân Bình 4",
                "phone": "0937554570",
                "price": "400,000",
                "area": 25,
                "province": 1,
                "district": 1,
                "ward": 1,
                "street": 1,
                "addressdetail": "Số 84 Giải Phóng, Phường 4, Tân Bình Giải Phóng - 04 - Tân Bình - Hồ Chí Minh"
            },
            "more": {
                "floor": 'Tang 1',
                "tolet": "Khep kin",
                "countpeople": "1 Nguoi",
                "electricprice": "Nha nuoc quy dinh",
                "waterprice": "Nha nuoc quy dinh",
                "countfloor": "",
                "counttolet": "",
                "countbedroom": "",
                "direction": "",
                "utility": [1, 2, 3, 4, 5, 6, 7],
                "imageurl": ["http://media.phongtot.vn/xc5tx4cj/cho-thue-phong-tro-moi-xay-thoang-mat-va-dep-yi3gj.jpg"]
            },
            "description": "",
            "location": {
                "lat": 1,
                "long": 1
            }
        }
    ]

}