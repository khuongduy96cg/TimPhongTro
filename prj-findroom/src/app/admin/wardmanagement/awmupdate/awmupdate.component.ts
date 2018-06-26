import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import {WardService} from '../../../_service/ward.service';

import {Ward} from '../../../_model/ward';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-awmupdate',
  templateUrl: './awmupdate.component.html',
  styleUrls: ['./awmupdate.component.css'],
  providers : [WardService, ValidateService]
})
export class AwmupdateComponent implements OnInit {

  ward = new Ward();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private wardService : WardService,
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.getWard();
  }

  getWard(){
    this.wardService.getWardById(this.id).subscribe(kqw => this.ward = kqw);
  }

  updateWard(){
    console.log(this.ward);
    //validate
    if(!this.validateService.validateWard(1,this.ward)){
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update ward
    this.wardService.updateWard(this.id,this.ward).subscribe(() => this.goBack());
  }

  refreshForm() {
    this.ward.name = '';
  }

  goBack() {
    this.router.navigate(['/a/wm/index']);
  }

}
