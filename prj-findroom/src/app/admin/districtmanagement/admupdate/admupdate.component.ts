import { Component, OnInit } from '@angular/core';
import { District } from '../../../_model/district';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import {DistrictService} from '../../../_service/district.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-admupdate',
  templateUrl: './admupdate.component.html',
  styleUrls: ['./admupdate.component.css'],
  providers: [DistrictService, ValidateService]
})
export class AdmupdateComponent implements OnInit {

  district = new District();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private districtService : DistrictService,
              private validateService: ValidateService,
              private flashMessages: FlashMessagesService) { }


  ngOnInit() {
    this.getDistrict();
  }

  updateDistrict(){
    console.log(this.district);
    //validate
    if(!this.validateService.validateDistrict(this.district)){
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new district
    this.districtService.updateDistrict(this.id,this.district).subscribe(() => this.goBack());
  }

  getDistrict(){
    this.districtService.getDistrictById(this.id).subscribe(kqd => this.district = kqd);
  }

  refreshForm() {
    this.district.name = '';
  }

  goBack() {
    this.router.navigate(['/a/dm/index']);
  }
}
