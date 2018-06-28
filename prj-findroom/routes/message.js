var express = require('express');
var router = express.Router();

var Message = require('../models/message.js');
//get list all messages
router.get('/',(req,res,next) => {
    Message.getAllMessages((err,messages) => {
        if(err) throw err;
        console.log(messages);
        res.json(messages);
    });
});
//get message by id
router.get('/:cid',(req,res,next) => {
    let sid = req.params.cid;

    Message.getMessageById(sid,(err,message) => {
        if(err) throw err;
        res.json(message);
    });
});
//get message by status
router.get('/status/:cstatus',(req,res,next) => {
    let sstatus = req.params.cstatus;

    Message.getMessagesByStatus(sstatus,(err,messages) => {
        if(err) throw err;
        res.json(messages);
    });
});
//add new message
router.post('/addnewmessage',(req,res,next) =>{
    let newMessage = new Message(req.body);

    Message.addNewMessage(newMessage,(err,newM) =>{
        if(err){
            res.json({msg:'Failed to add message'});
        }
        else{
            res.json({msg: 'Message added successfully'});
        }
    });
});
//update message by id
router.put('/updatemessage/:cid', (req,res,next) =>{
    let sid = req.params.cid;
    let newMessage = req.body;

    Message.updateMessage(sid,newMessage,{},(err, nM) =>{
        if(err) {
            res.json({msg : 'Lỗi khi update'});
        }
        else {
            res.json({msg : 'Update thành công', resM : nM});
        }
    })
})
//delete message by id
router.delete('/deletemessage/:cid', (req,res,next) =>{
    let sid = req.params.cid;

    Message.deleteMessage(sid, (err, kq) =>{
        if(err) {
            res.json({msg : 'Lỗi khi xóa message'});
        }
        else {
            res.json({msg : 'Xóa thành công'});
        }
    })
})

module.exports = router;