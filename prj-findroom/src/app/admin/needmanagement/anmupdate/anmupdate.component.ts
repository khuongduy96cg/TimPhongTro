import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Need} from '../../../_model/need';
import {NeedService} from '../../../_service/need.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-anmupdate',
  templateUrl: './anmupdate.component.html',
  styleUrls: ['./anmupdate.component.css'],
  providers : [NeedService, ValidateService]
})
export class AnmupdateComponent implements OnInit {

  need = new Need();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private needService : NeedService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    this.getNeed();
  }

  getNeed(){
    this.needService.getNeedById(this.id).subscribe(n => this.need = n);
  }

  updateNeed(){
    //validate
    if(!this.validateService.validateNeed(this.need)){
      this.flashMessages.show('Vui lòng nhập tên nhu cầu',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update need
    this.needService.updateNeed(this.id,this.need).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.need.name = '';
  }

  goBack(){
    this.router.navigate(['/a/nm/index'])
  }
}
