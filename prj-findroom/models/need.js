var mongoose = require('mongoose');

var NeedsSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        trim: true
    },
    name : {
        type : String,
        required : true
    }
});

var Needs = mongoose.model('Needs', NeedsSchema);
module.exports = Needs;
//
//get all Needs
module.exports.getAllNeeds = function(callback){
    Needs.find(callback);
}
//get need by id
module.exports.getNeedById = function(id, callback){
    Needs.findById(id,callback);
}
// add new need
module.exports.addNewNeed = function(newNeed,callback){
    newNeed.save(callback);
}
//update need with id
module.exports.updateNeed = function(id,need,option,callback){
    var query = {_id : id};
    Needs.findOneAndUpdate(query,need,option,callback);
}
//remove need with id
module.exports.deleteNeed = function (id, callback) {
    var query = { _id: id };
    Needs.remove(query, callback);
}