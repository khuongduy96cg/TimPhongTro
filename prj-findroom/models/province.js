var mongoose = require('mongoose');

var ProvincesSchema = new mongoose.Schema({
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

var Provinces = mongoose.model('Provinces', ProvincesSchema);
module.exports = Provinces;
//
//get all province
module.exports.getAllProvinces = function(callback){
    Provinces.find(callback);
}
//get province by id
module.exports.getProvinceById = function(id, callback){
    Provinces.findById(id,callback);
}
// add new province
module.exports.addNewProvince = function(newProvince,callback){
    newProvince.save(callback);
}
//update province with id
module.exports.updateProvince = function(id,province,option,callback){
    var query = {_id : id};
    Provinces.findOneAndUpdate(query,province,option,callback);
}
//delete province with id
module.exports.deleteProvince = function (id, callback) {
    var query = { _id: id };
    Provinces.remove(query, callback);
  }