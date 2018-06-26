var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var UsersSchema = new mongoose.Schema({
  _id: {
    type: String,
    uniqued: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    trim : true
  },
  birthday: {
    type: String,
    required: false,
    trim : true,
    default : '0003-02-01'
  },
  address: {
    type: String,
    required: true,
  },
  moreinformation: {
    type: String,
    required : false
  },
  roleid: {
    type: Number,
    required: true,
    trim : true,
    default : 1 // member
  },
  status : {
    type : String,
    required : true,
    trim : true,
    default : 'active'
  },
  //ma khu vuc quan ly
  manage : {
    provinceid: {
      type: Number,
      required : false,
      trim : true,
      default : -1
    },
    districtid: {
      type: Number,
      required: false,
      trim : true,
      default : -1
    }
  },
  //tin da luu
  savedroom : {
      type : [String],
      trim : true
  }
});
var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
//get all users
module.exports.getAllUsers = function(callback){
  Users.find(callback);
}
//get Admin
module.exports.getAdmin = function(id,roleid,callback){
  var query = {_id : id, roleid : roleid};

  Users.find(query,callback);
}
//get user by email
module.exports.getUserByEmail = function(email, callback){
  var query = {email: email};
  
	Users.findOne(query, callback);
}
//get user by roleid
module.exports.getUserByRoleId = function(roleid,callback){
  var query = {roleid : roleid};

  Users.find(query,callback);
}
//get member by roleid, status
module.exports.getUsersByRoleAndStatus = function(roleid,status,callback){
  var query = {roleid:roleid,status:status};

  Users.find(query,callback);
}
//get user by id
module.exports.getUserById = function(id, callback){
	Users.findById(id, callback);
}
//add new user
module.exports.addNewUser = function(newUser,callback){
  
  newUser.save(callback);
}
//update user
module.exports.updateUser = function(id,user,options,callback){
  var query = {_id:id};
  Users.findOneAndUpdate(query,user,options,callback);
}
//remove user with id
module.exports.deleteUser = function (id, callback) {
  var query = { _id: id };
  Users.remove(query, callback);
}