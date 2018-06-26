var express = require('express');
var router = express.Router();

var Utility = require('../models/utility.js');
//get list all utilities
router.get('/',(req,res,next) => {
    Utility.getAllUtilities((err,utilities) => {
        if(err) throw err;
        console.log(utilities);
        res.json(utilities);
    });
});
//get utility by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Utility.getUtilityById(sid,(err,utility) => {
        if(err) throw err;
        res.json(utility);
    });
});
//add new utility
router.post('/addnewutility',(req,res,next) =>{
    let newUtility = new Utility(req.body);

    Utility.addNewUtility(newUtility,(err,newU) =>{
        if(err){
            res.json({msg:'Failed to add utility'});
        }
        else{
            res.json({msg: 'Utility added successfully'});
        }
    });
});
//update utility by id
router.put('/updateutility/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newUtility = req.body;

    Utility.updateUtility(sid,newUtility,{},(err, nU) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resU : nU});
        }
    })
})
//delete utility by id
router.delete('/deleteutility/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Utility.deleteUtility(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa utility'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;