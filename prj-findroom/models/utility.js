var mongoose = require('mongoose');

var UtilitiesSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        trim: true
    },
    name : {
        type : String,
        required : true
    },
    checked:{
        type: Boolean,
        required: true,
        default: false
    }
});

var Utilities = mongoose.model('Utilities', UtilitiesSchema);
module.exports = Utilities;
//
//get all utilities
module.exports.getAllUtilities = function(callback){
    Utilities.find(callback);
}
//get utility by id
module.exports.getUtilityById = function(id, callback){
    Utilities.findById(id,callback);
}
// add new utility
module.exports.addNewUtility = function(newUtility,callback){
    newUtility.save(callback);
}
//update utility with id
module.exports.updateUtility = function(id,utility,option,callback){
    var query = {_id : id};
    Utilities.findOneAndUpdate(query,utility,option,callback);
}
//remove utility with id
module.exports.deleteUtility = function (id, callback) {
    var query = { _id: id };
    Utilities.remove(query, callback);
}