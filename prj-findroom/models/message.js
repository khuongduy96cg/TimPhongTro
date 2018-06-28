var mongoose = require('mongoose');
const sent = "sent";
const replied = "replied";

var MessagesSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true
    },
    messagesend : {
        by : {
            id : {
                type : String,
                trim : true
            },
            name:{
                type:String
            },
            email : {
                type:String,
                trim:true
            }
        },
        content : {
            type:String,
            trim:true
        },
        date : {
            type : String,
            trim : true
        }
    },
    messagereply : {
        by : {
            id : {
                type : String,
                trim : true
            },
            name:{
                type:String
            },
            email : {
                type:String,
                trim:true
            }
        },
        content : {
            type:String,
            trim:true
        },
        date : {
            type : String,
            trim : true
        }
    },
    status:{
        type: String,
        required: true,
        default: sent
    }
});

var Messages = mongoose.model('Messages', MessagesSchema);
module.exports = Messages;
//
//get all messages
module.exports.getAllMessages = function(callback){
    Messages.find(callback);
}
//get message by id
module.exports.getMessageById = function(id, callback){
    Messages.findById(id,callback);
}
//get message by status
module.exports.getMessagesByStatus = function(status,callback){
    query = {status : status};

    Messages.find(query,callback);
}
// add new message
module.exports.addNewMessage = function(newMessage,callback){
    newMessage.save(callback);
}
//update message with id
module.exports.updateMessage = function(id,message,option,callback){
    var query = {_id : id};
    Messages.findOneAndUpdate(query,message,option,callback);
}
//remove message with id
module.exports.deleteMessage = function (id, callback) {
    var query = { _id: id };
    Messages.remove(query, callback);
}