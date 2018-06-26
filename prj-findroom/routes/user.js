var express = require('express');
var router = express.Router();

var User = require('../models/user.js');
//get list all users
router.get('/', (req, res, next) => {
    User.getAllUsers((err, users) => {
        if (err) throw err;
        res.json(users);
    });
});
//get Admin
router.get('/adm', (req, res, next) => {
    User.getAdmin("user5", 3, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
});
//get user by roleid
router.get('/roleid/:croleid', (req, res, next) => {
    let sroleid = req.params.croleid;

    User.getUserByRoleId(sroleid, (err, users) => {
        if (err) throw err;
        res.json(users);
    });
});
//get user by roleid,status
router.get('/roleandstatus/:croleid/:cstatus', (req, res, next) => {
    let sroleid = req.params.croleid;
    let sstatus = req.params.cstatus;

    User.getUsersByRoleAndStatus(sroleid, sstatus, (err, users) => {
        if (err) throw err;
        res.json(users);
    });
});

//get user by id
router.get('/:cid', (req, res, next) => {
    let sid = req.params.cid;

    User.getUserById(sid, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
});
//add new user
router.post('/addnewuser', (req, res, next) => {
    let newUser = new User(req.body);

    User.addNewUser(newUser, (err, newus) => {
        if (err) {
            res.json({ msg: 'Failed to add user' });
        }
        else {
            res.json({ msg: 'User added successfully' });
        }
    });
});
//update user by id
router.put('/updateuser/:cid', (req, res, next) => {
    let sid = req.params.cid;
    let newUser = req.body;

    User.updateUser(sid, newUser, {}, (err, nUs) => {
        if (err) {
            res.json({ msg: 'Lỗi khi update' });
        }
        else {
            res.json({ msg: 'Update thành công', resUs: nUs });
        }
    })
});
//luu tin
router.post('/saveroom/:cid', (req, res, next) => {
    let iduser = 'user1'
    let sid = req.params.cid;

    let arr_temp = [];

    User.getUserById(iduser, (err, res1) => {
        if (err) throw err;
        else {
            arr_temp = res1.savedroom;
            console.log(arr_temp);
            //kiem tra tin da duoc luu hay chua
            if (arr_temp.length > 0) {
                for (var i = 0; i <= arr_temp.length; i++) {
                    if (arr_temp[i] == sid) {
                        res.json({ msg: "Tin đã được lưu rồi", stt: true });
                        return;
                    }
                }
                
            }
            //neu khong tim thay thi luu
            arr_temp.push(sid);
            User.updateUser(iduser, {savedroom : arr_temp}, {}, (err, res2) => {
                if (err) throw err;
                else res.json({ msg: 'Lưu tin thành công', stt: false });
                
            });

        }
    });
});
//delete user by id
router.delete('/deleteuser/:cid', (req, res, next) => {
    let sid = req.params.cid;

    User.deleteUser(sid, (err, kq) => {
        if (err) {
            res.json({ msg: 'Lỗi khi xóa user' });
        }
        else {
            res.json({ msg: 'Xóa thành công' });
        }
    })
})

module.exports = router;