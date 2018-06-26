import { Component, OnInit } from '@angular/core';
import {RoomService} from '../_service/room.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [RoomService]
})
export class RoomComponent implements OnInit {

  room: any;
  id = this.route.snapshot.params['id'];
  //parentMessage = ["message from parent"];
  
  constructor(private roomService : RoomService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
   // this.getRoomById(this.id);//->> get by id and status = "accepted"
   this.getDetailRoom(this.id);
  }

  getRoomById(id:string){
    this.roomService.getRoomById(id)
      .subscribe(rm => this.room = rm);
  }

  getDetailRoom(id:string){
    this.roomService.getDetailRoom(id).subscribe(dr => this.room = dr);
  }
}
