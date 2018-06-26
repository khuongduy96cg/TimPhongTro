import { Component, OnInit } from '@angular/core';
import {Street} from '../../../_model/street';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import {ProvinceService} from '../../../_service/province.service';
import {DistrictService} from '../../../_service/district.service';
import {WardService} from '../../../_service/ward.service';
import {StreetService} from '../../../_service/street.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-asmadd',
  templateUrl: './asmadd.component.html',
  styleUrls: ['./asmadd.component.css'],
  providers: [ProvinceService, DistrictService, WardService, StreetService, ValidateService]
})
export class AsmaddComponent implements OnInit {

  street = new Street();
  provinces : any[] = [];
  districts : any[] = [];
  wards : any[] = [];

  tempprvid : number = -1;
  tempdistid : number = -1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private provinceService : ProvinceService, 
    private districtService : DistrictService,
    private wardService : WardService,
    private streetService : StreetService,
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.street.wardid = -1;
    this.getAllProvinces();
  }

  addNewStreet(){
    this.street._id = Date.now();
    console.log(this.street);

    //validate
    if(!this.validateService.validateStreet(this.tempprvid,this.tempdistid,this.street)){
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new street
    this.streetService.addNewStreet(this.street).subscribe(() => this.goBack());
  }

  getAllProvinces(){
    this.provinceService.getAllProvinces().subscribe(kq => this.provinces = kq);
  }

  getDistrictsByProvinceId(pid: number){
    this.districtService.getDistrictsByProvinceId(pid).subscribe(ds => this.districts = ds);
  }

  getWardsByDistrictId(did : number){
    this.wardService.getWardsByDistrictId(did).subscribe(ws => this.wards = ws);
  }

  provinceDropDownChanged(val : number){
    this.districts = this.wards = [];

    this.tempdistid = this.street.wardid = -1;

    this.getDistrictsByProvinceId(val);
  }
  districtDropDownChanged(val : number){
    this.wards = [];

    this.street.wardid = -1;

    this.getWardsByDistrictId(val);
  }

  refreshForm() {
    this.tempprvid = -1;
    this.tempdistid = -1;
    this.street.wardid = -1;
    this.districts = this.wards = [];
    this.street.name = '';
  }

  goBack() {
    this.router.navigate(['/a/sm/index']);
  }
}
