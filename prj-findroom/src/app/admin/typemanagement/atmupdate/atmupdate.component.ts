import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Type} from '../../../_model/type';
import {TypeService} from '../../../_service/type.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-atmupdate',
  templateUrl: './atmupdate.component.html',
  styleUrls: ['./atmupdate.component.css'],
  providers : [TypeService, ValidateService]
})
export class AtmupdateComponent implements OnInit {

  type = new Type();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private typeService : TypeService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    this.getType();
  }

  getType(){
    this.typeService.getTypeById(this.id).subscribe(t => this.type = t);
  }

  updateType(){
    //validate
    if(!this.validateService.validateType(this.type)){
      this.flashMessages.show('Vui lòng nhập tên loại phòng',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update need
    this.typeService.updateType(this.id,this.type).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.type.name = '';
  }

  goBack(){
    this.router.navigate(['/a/tm/index'])
  }
}
