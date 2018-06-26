var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer'); // khai báo sử dụng module nodemailer
var Q = require("q");
var Room = require('../models/room.js');
var User = require('../models/user.js');
//
const stt_accept = "accepted";
const stt_refused = "refused";
const stt_waiting = "waiting";
const stt_locked = "locked";
//
const act_accept = "accept";
const act_unlock = "unlock";
const act_lock = "lock";
const act_refuse = "refuse";
//

//get all rooms
router.get('/', (req, res, next) => {
    Room.getAllRooms((err, rms) => {
        if (err) throw err;
        res.json(rms);
    });
});

//get room by id
router.get('/:cid', (req, res, next) => {
    let sid = req.params.cid;

    Room.getRoomById(sid, (err, room) => {
        if (err) throw err;
        res.json(room);
    });
});
//get detail room with _id = id and status = "accepted"
router.get('/detail_room/:id',(req,res,next) => {
    let sid = req.params.id;

    Room.getDetailRoom(sid, (err,droom) => {
        if(err){
            res.json({msg:"Error"});
        }
        else {
            res.json(droom);
        }
    });
});
//get room by type
router.get('/type/:ctype', (req, res, next) => {
    let stype = req.params.ctype;

    Room.getRoomsByType(stype, (err, rooms) => {
        if (err) throw err;
        res.json(rooms);
    });
});
//get room by status
router.get('/status/:cstatus', (req, res, next) => {
    let sstatus = req.params.cstatus;

    Room.getRoomsByStatus(sstatus, (err, rooms) => {
        if (err) throw err;
        res.json(rooms);
    });
});
//get room by query
router.get('/query/:cprovinceid/:cdistrictid/:cstatus', (req, res, next) => {
    let sprovinceid = req.params.cprovinceid;
    let sdistrictid = req.params.cdistrictid;
    let sstatus = req.params.cstatus;

    let squery = {
        status: sstatus,
        "detail.province": sprovinceid,
        "detail.district": sdistrictid

    }

    Room.getRoomByQuery(squery, (err, rooms) => {
        if (err) throw err;
        res.json(rooms);
    });
});
//get room by query2
router.get('/query2/:cprovinceid/:cdistrictid', (req, res, next) => {
    let sprovinceid = req.params.cprovinceid;
    let sdistrictid = req.params.cdistrictid;

    let squery = {
        "detail.province": sprovinceid,
        "detail.district": sdistrictid
    }

    Room.getRoomByQuery2(squery, (err, rooms) => {
        if (err) throw err;
        res.json(rooms);
    });
});
//advanced search
router.post('/adv_search', (req,res,next) => {
    let ssearch = req.body;
    let mot_trieu = 1000000;
    let nam_trieu = 5000000;
    let muoi_trieu = 10000000;
    let haimuoi_trieu = 20000000;

    console.log(ssearch);

    let querysearch = {
        "detail.district" : ssearch.district,
        "detail.ward" : ssearch.ward,
        "detail.street" : ssearch.street,
        "base.type" : ssearch.type,
    };

    if(ssearch.rangeprice == "1"){
        querysearch["detail.price"] = { $lt: mot_trieu };
    }
    if(ssearch.rangeprice == "1_5"){
        querysearch["detail.price"] = { $gte: mot_trieu, $lte: nam_trieu };
    }
    if(ssearch.rangeprice == "5_10"){
        querysearch["detail.price"] = { $gte: nam_trieu, $lte: muoi_trieu };
    }
    if(ssearch.rangeprice == "10_20"){
        querysearch["detail.price"] = { $gte: muoi_trieu, $lte: haimuoi_trieu };
    }
    if(ssearch.rangeprice == "20"){
        querysearch["detail.price"] = { $gt: haimuoi_trieu };
    }

    console.log(querysearch);

    Room.getRoomsWithAdvancedSearch(querysearch, (err,rooms) => {
         if(err){
            res.json({stt:false, msg: "Error",res : null});
         }
         else {
             //console.log(rooms);
             res.json({stt : true, msg : "Success", res : rooms});
         }
     });
});
//add new Room
router.post('/addnewroom', (req, res, next) => {
    let newRoom = new Room(req.body);
    console.log(newRoom);
    Room.addNewRoom(newRoom, (err, newrm) => {
        if (err) {
            res.json({ msg: 'Failed to add room',stt:false });
            throw err;
        }
        else {
            res.json({ msg: 'Room added successfully',stt:true });
        }
    });
});
//feedback post rom (accept || refuse || lock || unlock)
router.post('/feedback', (req, res, next) => {
    let newFeedback = req.body;

    let date = new Date(Date.now());
    let infoAdmin = {
        id : "user5",
        email : "user5@gmail.com",
        name : "User 5"
    }

    let newRoom = {};

    if(newFeedback.action == act_accept){
         newRoom = {
            "info.acceptedBy" : infoAdmin,
            "info.acceptedDate" : new Date(Date.now()),
            "status" : stt_accept
        }
    }
    else if(newFeedback.action == act_unlock){
        infoAdmin.phone = "";
        newRoom = {
            "info.modifiedBy" : infoAdmin,
            "info.modifiedDate" : new Date(Date.now()),
            "status": stt_accept
        }
    }
    else  {
        infoAdmin.phone = "";
        newRoom = {
            "info.modifiedBy" : infoAdmin,
            "info.modifiedDate" : new Date(Date.now()),
            "status": newFeedback.action + "ed"
        }
    }

    console.log(newFeedback);
    console.log(newRoom); // ->> update Room

    Room.updateRoom(newFeedback.roomid,newRoom,{}, (err, response) => {
        if(err) {
            res.json({msg: "Error", stt : false});
            throw err;
        }
        else
        {
            res.json({msg: "Success", stt : true, res : response});
        }
    });

    //load du lieu bat dong bo
    //Tìm ra email nhận thông báo : email user đăng bài dựa vào id bài viết.
    //Tìm ra email gửi thông báo : email admin đăng nhập để duyệt/khóa/mở khóa/từ chối (dựa vào id có được lúc đăng nhập)
    //Sau đó set lại trạng thái bài viết dựa theo action
    
    // var promise = function (req, res, next) {
    //     return Q.promise(function (resolve, reject, ) {
    //         let sid = 'user5';

    //         User.getUserById(sid, (err, user) => {
    //             if (err) reject("Error");
    //             resolve("Resolve it");
    //         });
    //     });
    // };
    // promise
    //     .then(function (data1) {
    //         return data2;
    //     })
    //     .then(function (data2) {
    //         // kết quả promise vừa trả về ở trên.
    //     }).catch(function (error) {
    //         console.log('Error');
    //     });
    //


    var transporter = nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'timphongtro123456@gmail.com',
            pass: '@Aa123456'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'timphongtro123456@gmail.com',
        to: newFeedback.infoUser.email,
        subject: newFeedback.title,
        text: 'Bạn nhận được email từ ' + newFeedback.title,
        html: '<p>Chào bạn '+'<strong>'+newFeedback.infoUser.name+'</strong>'+',<p>'
            + newFeedback.content + '</p>' + '<p>bởi <strong>' + infoAdmin.name + '</strong></p>'
            + 'vào lúc ' + '<strong>' + date + '</strong>'
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.json({ msg: "Error", success: false });
        } else {
            console.log('Message sent: ' + info.response);
            res.json({ msg: "Success", success: true });
        }
    });
});

module.exports = router;