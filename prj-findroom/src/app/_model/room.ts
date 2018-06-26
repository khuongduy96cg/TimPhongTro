export class Room {
    _id?: string = 'room' + Date.now();
    status: string = 'waiting';
    info : {
        createdBy : {
            id: string;
            email:string;
            name : string;
            phone : string;
        };
        createdDate :string;
        modifiedBy : {
            id: string;
            email:string;
            name : string;
            phone : string;
        };
        modifiedDate : string;
        acceptedBy : {
            id: string;
            email:string;
            name : string;
        };
        acceptedDate : string;
    };
    base: {
        need: number;
        type: number;
    };
    detail: {
        title: string;
        phone: string;
        price: number;
        area: number;
        province: number;
        district: number;
        ward: number;
        street: number;
        addressdetail: string;
    };
    more: {
        //phong tro
        floor: string;
        tolet: string;
        countpeople: string;
        electricprice: string;
        waterprice: string;
        //nha nguyen can
        countfloor: string;
        counttolet: string;
        countbedroom: string;
        direction: string;
        //tien ich cua phong
        utility: [number];
        imageurl: [string];
    };
    description: string;
    location: {
        lat: number;
        long: number;
    };
    
}