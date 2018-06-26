import { Component, ViewChild, OnInit } from '@angular/core';
import {NeedService} from '../_service/need.service';
import {TypeService} from '../_service/type.service';
import {UtilityService} from '../_service/utility.service';
import {ProvinceService} from '../_service/province.service';
import {DistrictService} from '../_service/district.service';
import {WardService} from '../_service/ward.service';
import {StreetService} from '../_service/street.service';
import {RoomService} from '../_service/room.service';
import {ValidateService} from '../_service/validate.service';
import {Room} from '../_model/room';
import {Type} from '../_model/type';

import {ImguploaderComponent} from '../imguploader/imguploader.component';
import { FlashMessagesService } from 'angular2-flash-messages';
import { _Status } from '../_const/_status';
import { _Enum } from '../_const/_enum';

@Component({
  selector: 'app-postroom',
  templateUrl: './postroom.component.html',
  styleUrls: ['./postroom.component.css'],
  providers : [UtilityService,ProvinceService,DistrictService,WardService,StreetService,RoomService,NeedService,TypeService,ValidateService]
})
export class PostroomComponent implements OnInit {
  @ViewChild(ImguploaderComponent) child;

  flag: boolean = true;
  enableBtn : boolean = true;
  temp_type :any = {
    _id : _Enum.Init_id,
    name : _Enum.Init_string
  };

  needs: any[] = [];
  types : any[] = [];
  utilities : any[] = [];
  provinces : any[] = [];
  districts : any[] = [];
  wards : any[] = [];
  streets : any[] = [];
  room : any = {
    _id: "room"+Date.now(),
    status: _Status.Status_waiting,
    info : {
      createdBy : {
          id: "user1",
          email:"phkduy96.cg@gmail.com",
          name : "User 1",
          phone : "09715432345",
      },
      createdDate :_Enum.Init_string,
      modifiedBy : {
        id: _Enum.Init_string,
        email:_Enum.Init_string,
        name : _Enum.Init_string,
        phone : _Enum.Init_string,
      },
      modifiedDate : _Enum.Init_string,
      acceptedBy : {
          id: _Enum.Init_string,
          email:_Enum.Init_string,
          name : _Enum.Init_string,
      },
      acceptedDate : _Enum.Init_string
     },
    base: {
        need: _Enum.Init_Need,
        type: _Enum.Init_Type,
    },
    detail: {
        title: _Enum.Init_string,
        phone: _Enum.Init_string,
        price: _Enum.Init_number,
        area: _Enum.Init_number,
        province: _Enum.Init_number,
        district: _Enum.Init_number,
        ward: _Enum.Init_number,
        street: _Enum.Init_number,
        addressdetail: _Enum.Init_string,
    },
    more: {
        //phong tro
        floor: _Enum.Init_string,
        tolet: _Enum.Init_string,
        countpeople: _Enum.Init_string,
        electricprice: _Enum.Init_string,
        waterprice: _Enum.Init_string,
        //nha nguyen can
        countfloor: _Enum.Init_string,
        counttolet: _Enum.Init_string,
        countbedroom: _Enum.Init_string,
        direction: _Enum.Init_string,
        //tien ich cua phong
        utility: _Enum.Init_array,
        imageurl: _Enum.Init_array,
    },
    description: _Enum.Init_string,
    location: {
        lat: _Enum.Init_number,
        long: _Enum.Init_number,
    }
  }
  //room = new Room();
  constructor(private utilityService : UtilityService,
              private needService : NeedService,
              private typeService : TypeService,
              private districtService : DistrictService,
              private wardService : WardService,
              private streetService : StreetService,
              private roomService : RoomService,
              private flashMessages: FlashMessagesService,
              private validateService : ValidateService,
              private provinceService : ProvinceService) { }

  ngOnInit() {
    this.getNeeds();
    this.getTypes();
    //this.getFirstRowType();
    this.getUtilities();
    this.getAllProvinces();
  }

  addNewRoom(){
    this.enableBtn = false;
    this.room._id ="room"+ Date.now();
    this.room.info.createdDate = (new Date(Date.now())).toString();
    this.room.more.utility = this.selectedUtilities;
    this.room.more.imageurl = this.child.imagepath;
    console.log(this.room);
    //validate
    var validate_temp = this.validateService.validateRoom(this.room);
    if(!validate_temp.valid){
      this.flashMessages.show(validate_temp.mess,{cssClass:'alert-danger',timeout:3000});
      this.enableBtn = true;
      return false;
    }
      this.roomService.addNewRoom(this.room)
        .subscribe(room => {
          //goBack()
          this.enableBtn = true;
        })
  };

  getNeeds(){
    this.needService.getNeeds().subscribe(ns => this.needs = ns);
  }
  
  getTypes(){
    this.typeService.getTypes().subscribe(ts => this.types = ts);
  }

  getFirstRowType(){
    this.typeService.getFirstRowType().subscribe(frt => this.temp_type = frt);
    
  }

  getUtilities(){
    this.utilityService.getUtilities()
      .subscribe(uls => this.utilities = uls);
  };
  
  getAllProvinces(){
    this.provinceService.getAllProvinces().subscribe(pvs => this.provinces = pvs);
  }

  getDistrictsByProvinceId(pid: number){
    this.districtService.getDistrictsByProvinceId(pid).subscribe(ds => this.districts = ds);
  }

  getWardsByDistrictId(did : number){
    this.wardService.getWardsByDistrictId(did).subscribe(ws => this.wards = ws);
  }
  
  getStreetsByWardId(wid : number){
    this.streetService.getStreetsByWardId(wid).subscribe(sts => this.streets = sts);
  }

  get selectedUtilities() { 
    return this.utilities
              .filter(ult => ult.checked)
              .map(ult => ult._id)
  }

  firstDropDownChanged(val: number) {
    //console.log(val);
    this.districts=this.wards=this.streets=[];
    this.getDistrictsByProvinceId(val);
    //console.log(this.districts);
  };
  secondDropDownChanged(val:number){
    //console.log(val);
    this.wards=this.streets=[];
    this.getWardsByDistrictId(val);
  };
  thirdDropDownChanged(val:number){
    this.streets=[];
    this.getStreetsByWardId(val);
  };
}
