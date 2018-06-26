import { Component, OnInit } from '@angular/core';
import { District } from '../../../_model/district';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import {ProvinceService} from '../../../_service/province.service';
import {DistrictService} from '../../../_service/district.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admadd',
  templateUrl: './admadd.component.html',
  styleUrls: ['./admadd.component.css'],
  providers: [ProvinceService, DistrictService, ValidateService]
})
export class AdmaddComponent implements OnInit {

  provinces : any[] = [];
  district = new District();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private provinceService : ProvinceService, 
              private districtService : DistrictService,
              private validateService: ValidateService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.district.provinceid = -1;
    this.getAllProvinces();
  }

  getAllProvinces(){
    this.provinceService.getAllProvinces().subscribe(kq => this.provinces = kq);
  }

  addNewDistrict(){
    this.district._id = Date.now();
    console.log(this.district);
    //validate
    if(!this.validateService.validateDistrict(this.district)){
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new district
    this.districtService.addNewDistrict(this.district).subscribe(() => this.goBack());
  }

  refreshForm() {
    this.district.provinceid = -1;
    this.district.name = '';
  }

  goBack() {
    this.router.navigate(['/a/dm/index']);
  }
}
