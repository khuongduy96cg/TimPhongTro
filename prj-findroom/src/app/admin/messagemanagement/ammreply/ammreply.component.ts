import { Component, OnInit } from '@angular/core';
import { Message } from '../../../_model/message';
import { MessageService } from '../../../_service/message.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { _Status } from '../../../_const/_status';

@Component({
  selector: 'app-ammreply',
  templateUrl: './ammreply.component.html',
  styleUrls: ['./ammreply.component.css'],
  providers : [MessageService]
})
export class AmmreplyComponent implements OnInit {

  message = new Message();

  id = this.route.snapshot.params['id'];

  constructor(private messageService : MessageService,private route: ActivatedRoute,private router: Router,private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.getMessageById(this.id);
  }

  getMessageById(id:string){
    this.messageService.getMessageById(id).subscribe(kq => this.message = kq);
  }

  replyMessage(){
    let infoAdmin = {
      id : "user5",
      name : "User 5",
      email: "user5@gmail.com"
    }
    this.message.status = _Status.Status_replied;
    this.message.messagereply.by = infoAdmin;
    this.message.messagereply.date = (new Date(Date.now())).toString();
    console.log(this.message);
    if(this.message.messagereply.content == undefined || this.message.messagereply.content == ""){
      this.flashMessages.show('Vui lòng nhập nội dung',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    this.messageService.updateMessage(this.id,this.message).subscribe(() => this.goBack());
  }

  refreshForm(){
    this.message.messagereply.content = "";
  }

  goBack(){
    this.router.navigate(['/a/mm/index']);
  }
}
