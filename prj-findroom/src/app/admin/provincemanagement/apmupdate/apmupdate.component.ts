import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Province} from '../../../_model/province';
import {ProvinceService} from '../../../_service/province.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-apmupdate',
  templateUrl: './apmupdate.component.html',
  styleUrls: ['./apmupdate.component.css'],
  providers : [ProvinceService, ValidateService]
})
export class ApmupdateComponent implements OnInit {

  province = new Province();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private provinceService : ProvinceService, 
    private validateService : ValidateService,
    private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    this.getProvince();
  }

  getProvince(){
    this.provinceService.getProvinceById(this.id).subscribe(pv => this.province = pv);
  }

  updateProvince(){
    //validate
    if(!this.validateService.validateProvince(this.province)){
      this.flashMessages.show('Vui lòng nhập tên tỉnh',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update province
    this.provinceService.updateProvince(this.id,this.province).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.province.name = '';
  }

  goBack(){
    this.router.navigate(['/a/pm/index'])
  }
}
