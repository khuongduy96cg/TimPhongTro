import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Utility} from '../../../_model/utility';
import {UtilityService} from '../../../_service/utility.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-autmadd',
  templateUrl: './autmadd.component.html',
  styleUrls: ['./autmadd.component.css'],
  providers : [UtilityService, ValidateService]
})
export class AutmaddComponent implements OnInit {

  utility = new Utility();

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private utilityService : UtilityService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  addNewUtility(){
    this.utility._id = Date.now();
    console.log(this.utility);
    //validate
    if(!this.validateService.validateUtility(this.utility)){
      this.flashMessages.show('Vui lòng nhập tên tiện ích phòng',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new utility
    this.utilityService.addNewUtility(this.utility).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.utility.name = '';
  }

  goBack(){
    this.router.navigate(['/a/utm/index'])
  }
}
