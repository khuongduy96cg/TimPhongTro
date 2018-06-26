var express = require('express');
var router = express.Router();

var District = require('../models/district.js');
//get list district by provinceid
router.get('/provinceid/:cpid',(req,res,next) => {
    let spid = req.params.cpid;

    District.getDistrictByProvinceId(spid,(err,districts) => {
        if(err) throw err;
        res.json(districts);
    });
});
//get district by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    District.getDistrictById(sid,(err,district) => {
        if(err) throw err;
        res.json(district);
    });
});
//add new district
router.post('/addnewdistrict',(req,res,next) =>{
    let newDistrict = new District(req.body);

    District.addNewDistrict(newDistrict,(err,newdist) =>{
        if(err){
            res.json({msg:'Failed to add district'});
        }
        else{
            res.json({msg: 'District added successfully'});
        }
    });
});
//update district with id
router.put('/updatedistrict/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newDistrict = req.body;

    District.updateDistrict(sid,newDistrict,{},(err, nDs) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resDs : nDs});
        }
    })
})
//delete district with id
router.delete('/deletedistrict/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    District.deleteDistrict(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa district'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;