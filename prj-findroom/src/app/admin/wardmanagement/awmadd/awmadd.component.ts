import { Component, OnInit } from '@angular/core';
import { Ward } from '../../../_model/ward';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import { ProvinceService } from '../../../_service/province.service';
import { DistrictService } from '../../../_service/district.service';
import { WardService } from '../../../_service/ward.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-awmadd',
  templateUrl: './awmadd.component.html',
  styleUrls: ['./awmadd.component.css'],
  providers: [ProvinceService, DistrictService, WardService, ValidateService]
})
export class AwmaddComponent implements OnInit {

  ward = new Ward();
  provinces: any[] = [];
  districts: any[] = [];

  tempprvid: number = -1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private provinceService: ProvinceService,
    private districtService: DistrictService,
    private wardService: WardService,
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.ward.districtid = -1;
    this.getAllProvinces();
  }

  addNewWard() {
    this.ward._id = Date.now();
    console.log(this.ward);

    //validate
    if (!this.validateService.validateWard(this.tempprvid, this.ward)) {
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //if true => add new ward
    this.wardService.addNewWard(this.ward).subscribe(() => {
      this.goBack();
      console.log("success");
    });
  }

  getAllProvinces() {
    this.provinceService.getAllProvinces().subscribe(kq => this.provinces = kq);
  }

  getDistrictsByProvinceId(pid: number) {
    this.districtService.getDistrictsByProvinceId(pid).subscribe(ds => this.districts = ds);
  }

  provinceDropDownChanged(val: number) {
    this.districts = [];
    this.ward.districtid = -1;
    this.getDistrictsByProvinceId(val);
  }

  refreshForm() {
    this.tempprvid = -1;
    this.ward.districtid = -1;
    this.districts = [];
    this.ward.name = '';
  }

  goBack() {
    this.router.navigate(['/a/wm/index']);
  }
}
