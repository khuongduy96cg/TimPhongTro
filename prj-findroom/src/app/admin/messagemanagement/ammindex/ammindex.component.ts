import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService } from '../../../_service/message.service';
import { _Status } from '../../../_const/_status';

@Component({
  selector: 'app-ammindex',
  templateUrl: './ammindex.component.html',
  styleUrls: ['./ammindex.component.css'],
  providers : [MessageService]
})
export class AmmindexComponent implements OnInit {

  messages : any[] = [];

  //show table
  showTable = _Status.Status_sent;
  //pagination
  p: number = 1;

  constructor(private messageService : MessageService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllMessagesByStatus(_Status.Status_sent);
  }

  getAllMessagesByStatus(status : string){
    this.messageService.getMessageByStatus(status).subscribe(kq => this.messages = kq);
  }

  messageDropDownChanged(val:string){
    if(val == _Status.Status_sent){
      this.showTable = val;
      
    }
    if(val == _Status.Status_replied){
      this.showTable = val;

    }
    this.messageService.getMessageByStatus(val).subscribe(kq => this.messages = kq);
  }

  deleteMessageReply(id:string){
    this.messageService.deleteMessage(id).subscribe(() =>{
      let index = -1;
      for(let i =0;i<this.messages.length;i++){
        if(this.messages[i]._id == id) index = i;
      }
      console.log(index);
      this.messages.splice(index,1);
    });
  }

  reload(){
    this.router.navigate(['/a/mm/index']);
  }

  goReply(id:string){
    this.router.navigate(['/a/mm/reply/'+id]);
  }
}
