var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');
var fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/room');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
   
var upload = multer({
     storage: storage ,
     limits : {fileSize : 1000000},
     fileFilter : function(req,file,cb){
         checkFileType(file,cb);
     }
    }).single('image');//'image' là "name" của component upload hình ảnh
//check file type
function checkFileType(file,cb){
    //allow ext
    const filetypes = /jpeg|jpg|png/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mine
    const mimetype =  filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    }else {
        console.log(file.mimetype + 'và' + file.extname);
        cb('Errors : Images Only !!!');
    }

}
//store file
router.post('/store/api', (req,res,next) => {
    upload(req,res,(err) =>{
        if(err){
            console.log(err);
            res.json({msg : err});
        }
        else{
            if(req.file == undefined){
                console.log(err);
                res.json({msg : 'Error : Chưa chọn file !'});
            }
            else{
                console.log(req.file);
            res.json({msg : 'Upload thành công !', filename : req.file.filename, filepath : `/images/room/${req.file.filename}`});
            }
        }
    });
});
//remove file
router.get('/remove/api/:cname', (req,res,next) =>{
    let sname = req.params.cname;
    let spath = './public/images/room/' + sname;
    fs.unlink(spath, (err) =>{
        if(err) {
            res.json({msg : err});
        }else{
            res.json({msg : 'Remove success !!!'});
        }
    });
});

module.exports = router;