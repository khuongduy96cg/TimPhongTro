var mongoose = require('mongoose');

var StreetsSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
        trim: true
    },
    name : {
        type : String,
        required : true
    },
    wardid : {
        type: Number,
        required: true,
        trim: true
    }
});

var Streets = mongoose.model('Streets', StreetsSchema);
module.exports = Streets;
//
//get all street
module.exports.getAllStreets = function(callback){
    Streets.find(callback);
}
//get street by id
module.exports.getStreetById = function(id, callback){
    Streets.findById(id,callback);
}
//get street by wardid
module.exports.getStreetByWardId = function(wardid, callback){
    query = {wardid : wardid};
	Streets.find(query, callback);
}
// add new street
module.exports.addNewStreet = function(newStreet,callback){
    newStreet.save(callback);
}
//update street with id
module.exports.updateStreet = function(id,street,option,callback){
    var query = {_id : id};
    Streets.findOneAndUpdate(query,street,option,callback);
}
//remove street with id
module.exports.deleteStreet = function (id, callback) {
    var query = { _id: id };
    Streets.remove(query, callback);
}