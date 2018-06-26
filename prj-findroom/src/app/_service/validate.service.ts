import { Injectable } from '@angular/core';
import { _Message } from '../_const/_message';
import { _Enum } from '../_const/_enum';

@Injectable()
export class ValidateService {

  constructor() { }

  //   validateRegister(user){
  //     //Người dùng cần nhập đầy đủ thông tin mới được phép đăng kí tài khoản
  //     if(user.name==undefined || user.username==undefined || user.password==undefined){
  //       return false;
  //     }
  //     else{
  //       return true;
  //     }
  //   }

  validateFeedback(feedback){
    if(feedback.title == undefined || feedback.title == ""){
      return false;
    }
    if(feedback.content == undefined || feedback.content == ""){
      return false;
    }
    return true;
  }

  validateAdvancedSearch(search){
    let def = 0;
    let defs = '0';
    if(search.district == undefined || search.district == "" || search.district == null || search.district == def || search.district == defs){
      return {'valid' : false,mess :_Message.Message_fileds_required};
    }
    if(search.ward == undefined || search.ward == "" || search.ward == null || search.ward == def || search.ward == defs){
      return {'valid' : false,mess :_Message.Message_fileds_required};
    }
    if(search.street == undefined || search.street == "" || search.street == null || search.street == def || search.street == defs){
      return {'valid' : false,mess :_Message.Message_fileds_required};
    }
    if(search.type == undefined || search.type == "" || search.type == null || search.type == def || search.type == defs){
      return {'valid' : false,mess :_Message.Message_fileds_required};
    }
    if(search.rangeprice == undefined || search.rangeprice == "" || search.rangeprice == null || search.rangeprice == def || search.rangeprice == defs){
      return {'valid' : false,mess :_Message.Message_fileds_required};
    }

    return {'valid' : true,mess :''};;

  }

  validateRoom(room){
    let def : number = 0;
    if(room.detail.title == undefined || room.detail.title == ''){
      return {'valid' : false,mess :_Message.Message_title_validate};
    }
    if(room.detail.title == undefined || room.detail.title == '' || !this.phoneValidator(room.detail.phone)){
      return {'valid' : false,mess :_Message.Message_phone_validate};
    }
    if(room.detail.price == undefined || room.detail.price == '' || !this.priceValidator(room.detail.price)){
      return {'valid' : false,mess :_Message.Message_price_validate};
    }
    if(room.detail.area == undefined || room.detail.area == '' || !this.areaValidator(room.detail.area)){
      return {'valid' : false,mess :_Message.Message_area_validate};
    }
    if(room.detail.province == undefined || room.detail.province == '' || room.detail.province == def){
      return {'valid' : false,mess :_Message.Message_province_validate};
    }
    if(room.detail.district == undefined || room.detail.district == '' || room.detail.district == def){
      return {'valid' : false,mess :_Message.Message_district_validate};
    }
    if(room.detail.ward == undefined || room.detail.ward == '' || room.detail.ward == def){
      return {'valid' : false,mess :_Message.Message_ward_validate};
    }
    if(room.detail.street == undefined || room.detail.street == '' || room.detail.street == def){
      return {'valid' : false,mess :_Message.Message_street_validate};
    }
    if(room.more.utility == undefined || (room.more.utility).length == 0){
      return {'valid' : false,mess :_Message.Message_uitility_validate};
    }
    if(room.more.imageurl == undefined || (room.more.imageurl).length == 0){
      return {'valid' : false,mess :_Message.Message_image_validate};
    }
    if(room.description == undefined || room.description == ''){
      return {'valid' : false,mess :_Message.Message_description_validate};
    }

    return {'valid' : true,mess :''};;
  }

  validateMember(user) {
    if(user.name == undefined || user.name == ''){
      return {'valid' : false,mess :_Message.Message_name_validate};
    }
    if(user.phone == undefined || user.phone == '' || !this.phoneValidator(user.phone)){
      return {'valid' : false,mess :_Message.Message_phone_validate};
    }
    if(user.email == undefined || user.email == '' || !this.emailValidator(user.email)){
      return {'valid' : false,mess :_Message.Message_email_validate};;
    }
    if(user.address == undefined || user.address == ''){
      return {'valid' : false,mess :_Message.Message_address_validate};;
    }
    if(user.birthday == undefined || user.birthday == ''){
      return {'valid' : false,mess :_Message.Message_birthday_validate};;
    }
    if(user.password == undefined || user.password == '' || !this.passwordValidator(user.password)){
      return {'valid' : false,mess :_Message.Message_password_validate};
    }
    //if(user.status == undefined || user.status == ''){
     // return {'valid' : false,mess :'-Trạng thái- không được bỏ trống'};;
   // }
    return {'valid' : true,mess :''};;
  }
  validateAdmin(user){
    if(user.name == undefined || user.name == ''){
      return {'valid' : false,mess :_Message.Message_name_validate};
    }
    if(user.phone == undefined || user.phone == '' || !this.phoneValidator(user.phone)){
      return {'valid' : false,mess :_Message.Message_phone_validate};
    }
    if(user.email == undefined || user.email == '' || !this.emailValidator(user.email)){
      return {'valid' : false,mess :_Message.Message_email_validate};;
    }
    if(user.address == undefined || user.address == ''){
      return {'valid' : false,mess :_Message.Message_address_validate};;
    }
    if(user.birthday == undefined || user.birthday == ''){
      return {'valid' : false,mess :_Message.Message_birthday_validate};;
    }
    // if(user.moreinformation == undefined || user.moreinformation == ''){
    //   return {'valid' : false,mess :'-Thông tin thêm- không được bỏ trống'};;
    // }
   // if(user.password == undefined || user.password == '' || !this.passwordValidator(user.password)){
     // return {'valid' : false,mess :'-Mật khẩu- không hợp lệ hoặc bị bỏ trống'};
    //}
    return {'valid' : true,mess :''};;
  }

  validateNeed(need) {
    if (need.name == undefined || need.name == '') {
      return false;
    }
    else {
      return true;
    }
  }
  validateType(type) {
    if (type.name == undefined || type.name == '') {
      return false;
    }
    else {
      return true;
    }
  }
  validateUtility(utility) {
    if (utility.name == undefined || utility.name == '') {
      return false;
    }
    else {
      return true;
    }
  }
  // validate add new province
  validateProvince(province) {
    if (province.name == undefined || province.name == '') {
      return false;
    }
    else {
      return true;
    }
  }

  validateDistrict(district) {
    if (district.name == undefined || district.name == '' ||
      district.provinceid == undefined || district.provinceid == '' || district.provinceid == -1) {
      return false;
    }
    else {
      return true;
    }
  }
  validateWard(idtemp, ward) {
    if (ward.name == undefined || ward.name == '' ||
      ward.districtid == undefined || ward.districtid == '' || ward.districtid == -1 ||
      idtemp == undefined || idtemp == '' || idtemp == -1) {
      return false;
    }
    else {
      return true;
    }
  }
  validateStreet(idtemp, idtemp2, street) {
    if (street.name == undefined || street.name == '' ||
      street.wardid == undefined || street.wardid == '' || street.wardid == -1 ||
      idtemp == undefined || idtemp == '' || idtemp == -1 ||
      idtemp2 == undefined || idtemp2 == '' || idtemp2 == -1) {
      return false;
    }
    else {
      return true;
    }
  }
  //  validateEmail(email){
  //    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //    return re.test(email);
  //  }
  phoneValidator(phone){
    //10 số: bắt đầu bằng 09
    //11 số: bắt đầu bằng 012, 016, 018, 019;
    var re = /^(01[2689]|09)[0-9]{8}$/;
    return re.test(phone);
  }

  emailValidator(email) {
    // RFC 2822 compliant regex
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
  }

  passwordValidator(password) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    var re = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
    return re.test(password);
  }

  priceValidator(price){
    var re = /^[0-9]{0,100}$/;
    return re.test(price);
  }
  areaValidator(area){
    var re = /^[0-9.]{0,100}$/;
    return re.test(area);
  }

  formatCurrency(number : number){
    return (number + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); //number = 43434; => 43,434
  }
}
