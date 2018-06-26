import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ValidateService } from '../../../_service/validate.service';
import {StreetService} from '../../../_service/street.service';

import {Street} from '../../../_model/street';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-asmupdate',
  templateUrl: './asmupdate.component.html',
  styleUrls: ['./asmupdate.component.css'],
  providers : [StreetService, ValidateService]
})
export class AsmupdateComponent implements OnInit {

  street = new Street();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private streetService : StreetService,
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.getStreet();
  }

  updateStreet(){
    console.log(this.street);
    //validate
    if(!this.validateService.validateStreet(1,1,this.street)){
      this.flashMessages.show('Vui lòng nhập đầy đủ thông tin',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true => update street
    this.streetService.updateStreet(this.id,this.street).subscribe(() => this.goBack());
  }

  getStreet(){
    this.streetService.getStreetById(this.id).subscribe(kqs => this.street = kqs);
  }

  refreshForm() {
    this.street.name = '';
  }

  goBack() {
    this.router.navigate(['/a/sm/index']);
  }
}
