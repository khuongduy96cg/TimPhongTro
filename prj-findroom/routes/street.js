var express = require('express');
var router = express.Router();

var Street = require('../models/street.js');
//get list street by wardid
router.get('/wardid/:cwid',(req,res,next) => {
    let swardid = req.params.cwid;

    Street.getStreetByWardId(swardid,(err,streets) => {
        if(err) throw err;
        res.json(streets);
    });
});
//get street by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Street.getStreetById(sid,(err,street) => {
        if(err) throw err;
        res.json(street);
    });
});
//add new street
router.post('/addnewstreet',(req,res,next) =>{
    let newStreet = new Street(req.body);

    Street.addNewStreet(newStreet,(err,newSt) =>{
        if(err){
            res.json({msg:'Failed to add street'});
        }
        else{
            res.json({msg: 'Street added successfully'});
        }
    });
});
//update street by id
router.put('/updatestreet/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newStreet = req.body;

    Street.updateStreet(sid,newStreet,{},(err, nSt) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resSt : nSt});
        }
    })
})
//delete street by id
router.delete('/deletestreet/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Street.deleteStreet(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa street'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;