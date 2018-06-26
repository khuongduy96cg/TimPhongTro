import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../../_service/district.service';
import {WardService} from '../../../_service/ward.service';
import {ProvinceService} from '../../../_service/province.service';
import {StreetService} from '../../../_service/street.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { _Enum } from '../../../_const/_enum';

@Component({
  selector: 'app-asmindex',
  templateUrl: './asmindex.component.html',
  styleUrls: ['./asmindex.component.css'],
  providers : [DistrictService, WardService,ProvinceService, StreetService]
})
export class AsmindexComponent implements OnInit {

  districts : any[] = [];
  wards : any[] = [];
  provinces : any[] = [];
  streets : any[] = [];

  show : boolean = false;
  showMess : string = 'Xóa';

  idprvtemp : number = _Enum.Init_id;
  iddistemp : number = _Enum.Init_id;
  idwadtemp : number = _Enum.Init_id;

  //pagination
  p: number = 1;

  constructor(private districtService : DistrictService, private wardService : WardService,
     private provinceService : ProvinceService, private streetService : StreetService,
     private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllProvinces();
  }

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

  provinceDropDownChanged(val : number){

    this.idprvtemp = val;
    this.districts = this.wards = this.streets = [];
    
    this.getDistrictsByProvinceId(val);
  }
  districtDropDownChanged(val : number){

    this.iddistemp = val;
    this.wards = this.streets = [];

    this.getWardsByDistrictId(val);
  }
  wardDropDownChanged(val : number){
    this.idwadtemp = val;
    this.getStreetsByWardId(val);
  }

  deleteStreet(id){
    this.streetService.deleteStreet(id).subscribe(() => this.getStreetsByWardId(this.idwadtemp));
  }

  goTo(){
    this.router.navigate(['/a/sm/add']);
  }

  goUpdate(id){
    this.router.navigate(['/a/sm/update/' + id]);
  }

  showDeleteButton(){
    this.show = !this.show;
    
    if(this.show){
      this.showMess = 'Hủy';
    }
    else {
      this.showMess = 'Xóa';
    }
  }
}
