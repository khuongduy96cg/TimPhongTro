var mongoose = require('mongoose');

var DistrictsSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
        trim: true
    },
    name : {
        type : String,
        required : true
    },
    provinceid : {
        type: Number,
        required: true,
        trim: true
    }
});

var Districts = mongoose.model('Districts', DistrictsSchema);
module.exports = Districts;
//
//get all districts
module.exports.getAllDistricts = function(callback){
    Districts.find(callback);
}
//get district by id
module.exports.getDistrictById = function(id, callback){
    Districts.findById(id,callback);
}
//get district by provinceid
module.exports.getDistrictByProvinceId = function(provinceid, callback){
    query = {provinceid : provinceid};
	Districts.find(query, callback);
}
// add new district
module.exports.addNewDistrict = function(newDistrict,callback){
    newDistrict.save(callback);
}
//update district with id
module.exports.updateDistrict = function(id,district,option,callback){
    var query = {_id : id};
    Districts.findOneAndUpdate(query,district,option,callback);
}
//remove district with id
module.exports.deleteDistrict = function (id, callback) {
    var query = { _id: id };
    Districts.remove(query, callback);
}