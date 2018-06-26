import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {User} from '../../../_model/user';
import {UserService} from '../../../_service/user.service';
import {ValidateService} from '../../../_service/validate.service';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-aumadd',
  templateUrl: './aumadd.component.html',
  styleUrls: ['./aumadd.component.css'],
  providers : [UserService, ValidateService]
})
export class AumaddComponent implements OnInit {

  // user : any = {
  //   _id: 'user'+ Date.now(),
  //   email:'',
  //   name:'',
  //   password:'',
  //   phone:'',
  //   birthday: '',
  //   address:'',
  //   roleid:1,
  //   districtid:0
  // };
  user = new User();

  constructor(private route: ActivatedRoute,private router: Router,private userService : UserService, 
    private validateService : ValidateService,
    private flashMessages:FlashMessagesService) { }

  ngOnInit() {
    
  }

  addNewUser(){
    this.user._id = 'user' + Date.now();

    console.log(this.user);

    //validate
    var validate_temp = this.validateService.validateMember(this.user);
    if(!validate_temp.valid){
      this.flashMessages.show(validate_temp.mess,{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    //if true -> add new user
    this.userService.addNewUser(this.user).subscribe(() => this.goBack());
  };

  refreshForm(){
    this.user.name = '';
    this.user.phone = '';
    this.user.email = '';
    this.user.address = '';
    this.user.birthday = '';
    this.user.password = '';
  }

  goBack(){
    this.router.navigate(['/a/um/index'])
  }
}
