var mongoose = require('mongoose');

var WardsSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
        trim: true
    },
    name : {
        type : String,
        required : true
    },
    districtid : {
        type: Number,
        required: true,
        trim: true
    }
});

var Wards = mongoose.model('Wards', WardsSchema);
module.exports = Wards;
//
//get all wards
module.exports.getAllWards = function(callback){
    Wards.find(callback);
}
//get ward by id
module.exports.getWardById = function(id, callback){
    Wards.findById(id,callback);
}
//get ward by districtid
module.exports.getWardByDistrictId = function(districtid, callback){
    query = {districtid : districtid};
	Wards.find(query, callback);
}
// add new ward
module.exports.addNewWard = function(newWard,callback){
    newWard.save(callback);
}
//update ward with id
module.exports.updateWard = function(id,ward,option,callback){
    var query = {_id : id};
    Wards.findOneAndUpdate(query,ward,option,callback);
}
//remove ward with id
module.exports.deleteWard = function (id, callback) {
    var query = { _id: id };
    Wards.remove(query, callback);
}