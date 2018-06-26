import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {RoomService} from '../../_service/room.service';

import {FlashMessagesService} from 'angular2-flash-messages';
import { ValidateService } from '../../_service/validate.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers : [RoomService, ValidateService]
})
export class FeedbackComponent implements OnInit {

  roomTitle : string = "Tiêu đề bài viết";
  infoUser : any = {};
  feedback : any = {
    title: "Website tìm phòng trọ",
    content:""
  }

  enableBtn : boolean = true;

  id = this.route.snapshot.params['id'];
  action = this.route.snapshot.params['action'];

  constructor(private roomService : RoomService, private route: ActivatedRoute,private router: Router, private flashMessages:FlashMessagesService,
                private validateService : ValidateService) { }

  ngOnInit() {
    this.getInfoRoom();
    this.getContent(this.action);
  }

  getInfoRoom(){
    this.roomService.getRoomById(this.id).subscribe(kq => {
      this.roomTitle = kq.detail.title;
      this.infoUser = kq.info.createdBy;
    });
  }
  sendFeedback(){
    this.enableBtn = false;
    this.feedback.roomid = this.id;
    this.feedback.infoUser = this.infoUser;
    this.feedback.action = this.action;
    //validate
    var validate_temp = this.validateService.validateFeedback(this.feedback);
    if(!validate_temp){
      this.flashMessages.show("Nhập đầy đủ thông tin",{cssClass:'alert-danger',timeout:3000});
      this.enableBtn = true;
      return false;
    }
    console.log(this.feedback);

    this.roomService.feedback(this.feedback).subscribe(() => {
      this.goBack();
      this.enableBtn = true;
    });
  }
  getContent(action){
    if(action == 'refuse') this.feedback.content = "Tin của bạn không được chập nhận. Lý do : ";
    if(action == 'accept') this.feedback.content = "Tin của bạn đã được duyệt.";
    if(action == 'lock') this.feedback.content = "Tin của bạn bị khóa. Lý do : ";
    if(action == 'unlock') this.feedback.content = "Tin của bạn được mở khóa. Lý do : ";
  }
  refreshForm(){
    this.feedback.title = "Website tìm phòng trọ";
    this.getContent(this.action);
  }
  goBack(){
    this.router.navigate(['/a/prm/index']);
  }
}
