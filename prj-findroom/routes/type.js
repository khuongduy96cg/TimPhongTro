var express = require('express');
var router = express.Router();

var Type = require('../models/type.js');
//get first row of types
router.get('/getfirstrow',(req,res,next) => {
    Type.getFirstRowTypes((err,type) => {
        if(err) throw err;
        console.log(type);
        res.json(type);
    });
});

//get list all types
router.get('/',(req,res,next) => {
    Type.getAllTypes((err,types) => {
        if(err) throw err;
        console.log(types);
        res.json(types);
    });
});
//get type by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Type.getTypeById(sid,(err,type) => {
        if(err) throw err;
        res.json(type);
    });
});
//add new type
router.post('/addnewtype',(req,res,next) =>{
    let newType = new Type(req.body);

    Type.addNewType(newType,(err,newT) =>{
        if(err){
            res.json({msg:'Failed to add type'});
        }
        else{
            res.json({msg: 'Type added successfully'});
        }
    });
});
//update type by id
router.put('/updatetype/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newType = req.body;

    Type.updateType(sid,newType,{},(err, nT) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resT : nT});
        }
    })
})
//delete type by id
router.delete('/deletetype/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Type.deleteType(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa type'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;