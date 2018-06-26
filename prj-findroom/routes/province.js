var express = require('express');
var router = express.Router();

var Province = require('../models/province.js');
//get list all provinces
router.get('/',(req,res,next) => {
    Province.getAllProvinces((err,provinces) => {
        if(err) throw err;
        res.json(provinces);
    });
});
//get province by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Province.getProvinceById(sid,(err,province) => {
        if(err) throw err;
        res.json(province);
    });
});
//add new province
router.post('/addnewprovince',(req,res,next) =>{
    let newProvince = new Province(req.body);

    Province.addNewProvince(newProvince,(err,newprv) =>{
        if(err){
            res.json({msg:'Failed to add province'});
        }
        else{
            res.json({msg: 'Province added successfully'});
        }
    });
});
//update province by id
router.put('/updateprovince/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newProvince = req.body;

    Province.updateProvince(sid,newProvince,{},(err, nPv) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resPv : nPv});
        }
    })
})
//delete province by id
router.delete('/deleteprovince/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Province.deleteProvince(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa province'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;