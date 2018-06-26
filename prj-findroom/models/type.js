var mongoose = require('mongoose');

var TypesSchema = new mongoose.Schema({
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

var Types = mongoose.model('Types', TypesSchema);
module.exports = Types;
//
//get first row of types
module.exports.getFirstRowTypes = function(callback){
    Types.find(callback).limit(1);
}
//get all Types
module.exports.getAllTypes = function(callback){
    Types.find(callback);
}
//get type by id
module.exports.getTypeById = function(id, callback){
    Types.findById(id,callback);
}
// add new type
module.exports.addNewType = function(newType,callback){
    newType.save(callback);
}
//update type with id
module.exports.updateType = function(id,type,option,callback){
    var query = {_id : id};
    Types.findOneAndUpdate(query,type,option,callback);
}
//remove type with id
module.exports.deleteType = function (id, callback) {
    var query = { _id: id };
    Types.remove(query, callback);
}