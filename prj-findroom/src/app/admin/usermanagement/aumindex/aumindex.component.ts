import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {UserService} from '../../../_service/user.service';
import { _Status } from '../../../_const/_status';

@Component({
  selector: 'app-aumindex',
  templateUrl: './aumindex.component.html',
  styleUrls: ['./aumindex.component.css'],
  providers: [UserService]
})
export class AumindexComponent implements OnInit {

  users : any[] = [];
  // show/hide password
  show : boolean = false; 
  showDel : boolean = false;
  showDelMess : string = 'Xóa';
  textShowHidePassword = 'Hiện';
  iconShowHidePassword = '';

  //pagination
  p: number = 1;

  constructor(private userService : UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(){
    //roleid =1 => member
    this.userService.getUsersByRoleAndStatus(1,_Status.Status_active)
      .subscribe(uss => this.users = uss);
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(() => this.getMembers());
  }

  goUpdate(id){
    this.router.navigate(['/a/um/update/'+id])
  }

  statusDropDownChanged(val: string){
    if(val == 'all'){
      this.userService.getUsersByRoleId(1).subscribe(uss => this.users = uss);
    }
    else if(val == _Status.Status_active || val == _Status.Status_locked){
      this.userService.getUsersByRoleAndStatus(1,val).subscribe(uss => this.users = uss);
    }
  }

  showHidePassword(){
    this.show = !this.show;
    if(this.show){
      this.textShowHidePassword = 'Ẩn';
      this.iconShowHidePassword = '-slash';
    }
    else{
      this.textShowHidePassword = 'Hiện';
      this.iconShowHidePassword = '';
    }
  }

  goTo(){
    this.router.navigate(['/a/um/add'])
  }

  showDeleteButton(){
    this.showDel = !this.showDel;
    
    if(this.showDel){
      this.showDelMess = 'Hủy';
    }
    else {
      this.showDelMess = 'Xóa';
    }
  }
}
