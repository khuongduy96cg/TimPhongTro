import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Type} from '../../../_model/type';
import {TypeService} from '../../../_service/type.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-atmadd',
  templateUrl: './atmadd.component.html',
  styleUrls: ['./atmadd.component.css'],
  providers : [TypeService, ValidateService]
})
export class AtmaddComponent implements OnInit {

  type = new Type();

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private typeService : TypeService, 
              private validateService : ValidateService,
              private flashMessages:FlashMessagesService) { }

  ngOnInit() {
  }

  addNewType(){
    this.type._id = Date.now();
    console.log(this.type);
    //validate
    if(!this.validateService.validateType(this.type)){
      this.flashMessages.show('Vui lòng nhập tên loại phòng',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => add new type
    this.typeService.addNewType(this.type).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.type.name = '';
  }

  goBack(){
    this.router.navigate(['/a/tm/index'])
  }
}
