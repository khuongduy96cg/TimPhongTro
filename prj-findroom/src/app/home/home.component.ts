import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_service/room.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../_service/validate.service';
import { Room } from '../_model/room';
import { AdvancedSearch } from '../_model/advanced_search';
import { DistrictService } from '../_service/district.service';
import { WardService } from '../_service/ward.service';
import { StreetService } from '../_service/street.service';
import { TypeService } from '../_service/type.service';
import { _Enum } from '../_const/_enum';
import { AdvancedSearchService } from '../_service/advanced_search.service';


import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RoomService, ValidateService, DistrictService, WardService, StreetService, TypeService, AdvancedSearchService, UserService]
})
export class HomeComponent implements OnInit {

  rooms: Room[];

  districts: any = [];
  wards: any = [];
  streets: any = [];

  types: any = [];

  adv_search: AdvancedSearch = new AdvancedSearch();

  idprvtemp: number = _Enum.Init_id;
  iddistemp: number = _Enum.Init_id;
  idwadtemp: number = _Enum.Init_id;

  //pagination
  p: number = 1;

  constructor(private roomService: RoomService, private validateService: ValidateService, private route: ActivatedRoute, private router: Router,
    private districtService: DistrictService, private wardService: WardService, private streetService: StreetService,
    private typeService: TypeService, private advancedSearchService: AdvancedSearchService, private flashMessages: FlashMessagesService,
    private userService: UserService) { }

  ngOnInit() {
    this.getRooms();
    this.getAllDistrictsOfTpHCM();
    this.getTypes();
  }

  // convert to money string
  toCurrency(price: number) {
    return (price).toLocaleString();
  }
  //1 ngay truoc or 1 gio truoc
  //->>> still bug logic
  subDayAccepted(date: string) {
    if(date != "" && date != undefined && date!= null){
      let yearNow = (new Date(Date.now())).getFullYear();
    let yearAccepted = (new Date(date)).getFullYear();

    if (yearNow == yearAccepted) {
      let monthNow = (new Date(Date.now())).getMonth();
      let monthAccepted = (new Date(date)).getMonth();

      if (monthNow == monthAccepted) {
        let dateNow = (new Date(Date.now())).getDate();
        let dateAccepted = (new Date(date)).getDate();

        if (dateNow == dateAccepted) {
          let hourNow = (new Date(Date.now())).getHours();
          let hourAccepted = (new Date(date)).getHours();

          if (hourNow == hourAccepted) {
            let minuteNow = (new Date(Date.now())).getMinutes();
            let minuteAccepted = (new Date(date)).getMinutes();

            if (minuteNow == minuteAccepted) {
              let secondNow = (new Date(Date.now())).getSeconds();
              let secondAccepted = (new Date(date)).getSeconds();

              if (secondNow == secondAccepted) return "vài giây trước";

              return (secondNow - secondAccepted) + " giây trước";
            }
            return (minuteNow - minuteAccepted).toString() + " phút trước";
          }
          return (hourNow - hourAccepted).toString() + " giờ trước";
        }
        return (dateNow - dateAccepted).toString() + " ngày trước";

      }
      return (monthNow - monthAccepted).toString() + " tháng trước";

    }
    return (yearNow - yearAccepted).toString() + " năm trước";
    }
    else {
      return "không xác định";
    }
    
  }

  submitAdvancedSearch() {
    //validate
    var validate_temp = this.validateService.validateAdvancedSearch(this.adv_search);
    if (!validate_temp.valid) {
      this.flashMessages.show(validate_temp.mess, { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //start search
    this.advancedSearchService.getRoomWithAdvancedSearch(this.adv_search).subscribe((kq) => this.rooms = kq.res);
  }

  saveRoom(id: string) {
    //
    this.userService.saveRoom(id).subscribe((kq) => {
      if (kq.stt == true) {
        this.flashMessages.show(kq.msg, { cssClass: 'alert-danger', timeout: 3000 });
        return false;
      }
      else {
        this.flashMessages.show(kq.msg, { cssClass: 'alert-success', timeout: 3000 });
        return false;
      }
    });
  }

  getRooms() {
    this.roomService.getRoomsByType(1)
      .subscribe(rms => this.rooms = rms);

  }

  getAllDistrictsOfTpHCM() {
    this.districtService.getDistrictsByProvinceId(_Enum.TPHCM_Id).subscribe(kq => this.districts = kq); // all districts of TP.HCM
  }

  getWardsByDistrictId(did: number) {
    this.wardService.getWardsByDistrictId(did).subscribe(ws => this.wards = ws);
  }

  getStreetsByWardId(wid: number) {
    this.streetService.getStreetsByWardId(wid).subscribe(sts => this.streets = sts);
  }

  getTypes() {
    this.typeService.getTypes().subscribe(kq => this.types = kq);
  }

  goTo(id) {
    this.router.navigate(['/detailroom/' + id]);
  }

  districtDropDownChanged(val: number) {

    this.iddistemp = val;
    this.wards = [];
    this.streets = [];

    this.getWardsByDistrictId(val);
  }
  wardDropDownChanged(val: number) {
    this.idwadtemp = val;
    this.streets = [];
    this.getStreetsByWardId(val);
  }
}
