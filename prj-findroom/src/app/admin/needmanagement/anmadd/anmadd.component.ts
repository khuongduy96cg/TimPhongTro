import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Need} from '../../../_model/need';
import {NeedService} from '../../../_service/need.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-anmadd',
  templateUrl: './anmadd.component.html',
  styleUrls: ['./anmadd.component.css'],
  providers : [NeedService, ValidateService]
})
export class AnmaddComponent implements OnInit {

  need = new Need();

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private needService : NeedService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  addNewNeed(){
    this.need._id = Date.now();
    console.log(this.need);
    //validate
    if(!this.validateService.validateNeed(this.need)){
      this.flashMessages.show('Vui lòng nhập tên nhu cầu',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new need
    this.needService.addNewNeed(this.need).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.need.name = '';
  }

  goBack(){
    this.router.navigate(['/a/nm/index'])
  }
}
