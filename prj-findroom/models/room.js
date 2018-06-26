var mongoose = require('mongoose');

const accepted = "accepted";

var RoomsSchema = new mongoose.Schema({
    _id: {
        type: String,
        uniqued: true,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    info: {
        createdBy: {
            id: {
                type: String,
                required: true,
                trim: true
            },
            email: {
                type: String,
                required: true,
                trim: true
            },
            name: {
                type: String,
                required: true,
                trim: true
            },
            phone: {
                type: String,
                required: true,
                trim: true
            }
        },
        createdDate: {
            type: String
        },
        modifiedBy: {
            id: {
                type: String,
               // required: true,
                trim: true
            },
            email: {
                type: String,
                //required: true,
                trim: true
            },
            name: {
                type: String,
               // required: true,
                trim: true
            },
            phone: {
                type: String,
              //  required: true,
                trim: true
            }
        },
        modifiedDate: {
            type: String
        },
        acceptedBy: {
            id: {
                type: String,
              //  required: true,
                trim: true
            },
            email: {
                type: String,
              //  required: true,
                trim: true
            },
            name: {
                type: String,
              //  required: true,
                trim: true
            }
        },
        acceptedDate: {
            type: String
        }
    },
    //thong tin co ban
    base: {
        //nhu cau
        need: {
            type: Number,
            required: true,
            trim: true
        },
        //loai phong
        type: {
            type: Number,
            required: true,
            trim: true
        },
    },
    //thong tin chi tiet
    detail: {
        title: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true
        },
        area: {
            type: Number,
            trim: true
        },
        province: {
            type: Number,
            default: 1
        },
        district: {
            type: Number
        },
        ward: {
            type: Number
        },
        street: {
            type: Number
        },
        addressdetail: {
            type: String
        }
    },
    //thong tin them
    more: {
        //phong tro
        floor: {
            type: String,
            required: false,
            trim: true
        },
        tolet: {
            type: String,
            required: false,
            trim: true
        },
        countpeople: {
            type: String,
            required: false,
            trim: true
        },
        electricprice: {
            type: String,
            required: false,
            trim: true
        },
        waterprice: {
            type: String,
            required: false,
            trim: true
        },
        //nha nguyen can
        countfloor: {
            type: String,
            required: false,
            trim: true
        },
        counttolet: {
            type: String,
            required: false,
            trim: true
        },
        countbedroom: {
            type: String,
            required: false,
            trim: true
        },
        direction: {
            type: String,
            required: false,
            trim: true
        },
        //tien ich cua phong
        utility: {
            type: [Number],
            required: false
        },
        imageurl: {
            type: [String],
            required: false,
            trim: true
        }
    },
    //mo ta chi tiet
    description: {
        type: String,
        required: true,
    },
    //vi tri
    location: {
        lat: {
            type: Number,
            required: true,
            trim: true
        },
        long: {
            type: Number,
            required: true,
            trim: true
        }
    }
});
var Rooms = mongoose.model('Rooms', RoomsSchema);
module.exports = Rooms;

//get all rooms
module.exports.getAllRooms = function (callback) {
    Rooms.find(callback);
}
//get room by id
module.exports.getRoomById = function (id, callback) {
    Rooms.findById(id, callback);
}
//get rooms by type and status = 'accepted'
module.exports.getRoomsByType = function (type, callback) {
    query = { "base.type": type, status: accepted };

    Rooms.find(query, callback);
}
//get detail room : with status = "accepted"
module.exports.getDetailRoom = function (id, callback) {
    query = { _id: id, status: accepted };

    Rooms.findOne(query, callback);
}
//get rooms by status
module.exports.getRoomsByStatus = function (status, callback) {
    query = { status: status };

    Rooms.find(query, callback);
}
//get rooms by query (provinceid,districtid,status)
module.exports.getRoomByQuery = function (query, callback) {

    Rooms.find(query, callback);
}
//get rooms by query2 (provinceid,districtid)
module.exports.getRoomByQuery2 = function (query, callback) {

    Rooms.find(query, callback);
}
//advanced search
module.exports.getRoomsWithAdvancedSearch = function (querysearch,callback){
    querysearch["status"] = accepted;
    
    Rooms.find(querysearch,callback);
}

//add new room
module.exports.addNewRoom = function (newRoom, callback) {

    newRoom.save(callback);
}
//update user
module.exports.updateRoom = function(id,newRoom,options,callback){
    var query = {_id:id};
    Rooms.findOneAndUpdate(query,newRoom,options,callback);
  }