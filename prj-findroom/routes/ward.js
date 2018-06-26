var express = require('express');
var router = express.Router();

var Ward = require('../models/ward.js');
//get list ward by districtid
router.get('/districtid/:cdid',(req,res,next) => {
    let sdistrictid = req.params.cdid;

    Ward.getWardByDistrictId(sdistrictid,(err,wards) => {
        if(err) throw err;
        res.json(wards);
    });
});
//get ward by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Ward.getWardById(sid,(err,ward) => {
        if(err) throw err;
        res.json(ward);
    });
});
//add new ward
router.post('/addnewward',(req,res,next) =>{
    let newWard = new Ward(req.body);

    Ward.addNewWard(newWard,(err,newW) =>{
        if(err){
            res.json({msg:'Failed to add ward'});
        }
        else{
            res.json({msg: 'Ward added successfully'});
        }
    });
});
//update ward by id
router.put('/updateward/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newWard = req.body;

    Ward.updateWard(sid,newWard,{},(err, nW) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resW : nW});
        }
    })
})
//delete ward by id
router.delete('/deleteward/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Ward.deleteWard(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa ward'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;