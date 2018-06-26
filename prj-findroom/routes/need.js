var express = require('express');
var router = express.Router();

var Need = require('../models/need.js');
//get list all needs
router.get('/',(req,res,next) => {
    Need.getAllNeeds((err,needs) => {
        if(err) throw err;
        console.log(needs);
        res.json(needs);
    });
});
//get need by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Need.getNeedById(sid,(err,need) => {
        if(err) throw err;
        res.json(need);
    });
});
//add new need
router.post('/addnewneed',(req,res,next) =>{
    let newNeed = new Need(req.body);

    Need.addNewNeed(newNeed,(err,newnd) =>{
        if(err){
            res.json({msg:'Failed to add need'});
        }
        else{
            res.json({msg: 'Need added successfully'});
        }
    });
});
//update need by id
router.put('/updateneed/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newNeed = req.body;

    Need.updateNeed(sid,newNeed,{},(err, nNd) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resNd : nNd});
        }
    })
})
//delete need by id
router.delete('/deleteneed/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Need.deleteNeed(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa need'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;