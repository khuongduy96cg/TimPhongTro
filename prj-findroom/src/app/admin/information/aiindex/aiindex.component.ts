import { Component, OnInit } from '@angular/core';

import { User } from '../../../_model/user';
import { UserService } from '../../../_service/user.service';
import { DistrictService } from '../../../_service/district.service';
import {ValidateService} from '../../../_service/validate.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-aiindex',
  templateUrl: './aiindex.component.html',
  styleUrls: ['./aiindex.component.css'],
  providers: [UserService, DistrictService,ValidateService]
})
export class AiindexComponent implements OnInit {

  user = new User();

  districtname: string = 'Quận ';

  show: boolean = false;

  constructor(private userService: UserService, private districtService: DistrictService,private validateService : ValidateService,
                private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    this.userService.getAdmin().subscribe(kq => {
      this.user = kq[0];
      //get district name
      this.districtService.getDistrictById(this.user.manage.districtid).subscribe(kq2 => this.districtname = kq2.name);
    });
  }

  update() {
    this.show = !this.show;
    
  }

  save() {
    this.show = !this.show;
    console.log(this.user);
    //email khong duoc trung voi email da co trong database
    //co nen quan ly file ?
    //gui mail khi duyet postroom
    //
    var validate_temp = this.validateService.validateAdmin(this.user);
    if(!validate_temp.valid){
      this.flashMessages.show(validate_temp.mess,{cssClass:'alert-danger',timeout:3000});
      this.getInfo();
      return false;
    }

    this.userService.updateUser(this.user._id,this.user).subscribe(kqq => {
      this.flashMessages.show(kqq.msg,{cssClass:'alert-success',timeout:3000});
    })
  }

  cancel() {
    this.show = !this.show;
  }
}
