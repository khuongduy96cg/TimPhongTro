import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Province} from '../../../_model/province';
import {ProvinceService} from '../../../_service/province.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-apmadd',
  templateUrl: './apmadd.component.html',
  styleUrls: ['./apmadd.component.css'],
  providers : [ProvinceService, ValidateService]
})
export class ApmaddComponent implements OnInit {

  province = new Province();

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private provinceService : ProvinceService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  addNewProvince(){
    this.province._id = Date.now();
    console.log(this.province);
    //validate
    if(!this.validateService.validateProvince(this.province)){
      this.flashMessages.show('Vui lòng nhập tên tỉnh',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new province
    this.provinceService.addNewProvince(this.province).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.province.name = '';
  }

  goBack(){
    this.router.navigate(['/a/pm/index'])
  }
}
