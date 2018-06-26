import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Utility} from '../../../_model/utility';
import {UtilityService} from '../../../_service/utility.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-autmupdate',
  templateUrl: './autmupdate.component.html',
  styleUrls: ['./autmupdate.component.css'],
  providers : [UtilityService, ValidateService]
})
export class AutmupdateComponent implements OnInit {

  utility = new Utility();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private utilityService : UtilityService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    this.getUtility();
  }
  
  getUtility(){
    this.utilityService.getUtilityById(this.id).subscribe(utm => this.utility = utm);
  }

  updateUtility(){
    //validate
    if(!this.validateService.validateNeed(this.utility)){
      this.flashMessages.show('Vui lòng nhập tên tiện ích phòng',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update utility
    this.utilityService.updateUtility(this.id,this.utility).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.utility.name = '';
  }

  goBack(){
    this.router.navigate(['/a/utm/index'])
  }
}
