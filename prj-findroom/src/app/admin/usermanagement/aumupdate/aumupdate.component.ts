import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {User} from '../../../_model/user';
import {UserService} from '../../../_service/user.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-aumupdate',
  templateUrl: './aumupdate.component.html',
  styleUrls: ['./aumupdate.component.css'],
  providers : [UserService, ValidateService]
})
export class AumupdateComponent implements OnInit {

  user = new User();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute,private router: Router,private userService : UserService, 
    private validateService : ValidateService,
    private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUserById(this.id).subscribe(kq => this.user = kq);
  }

  updateUser(){
    //validate
    var validate_temp = this.validateService.validateMember(this.user);
    if(!validate_temp.valid){
      this.flashMessages.show(validate_temp.mess,{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    console.log(this.user);
    //if true -> update user with id
    this.userService.updateUser(this.id,this.user).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.user.name = '';
    this.user.phone = '';
   // this.user.email = '';
    this.user.address = '';
    this.user.birthday = '';
    this.user.password = '';
  }

  goBack(){
    this.router.navigate(['/a/um/index'])
  }
}
