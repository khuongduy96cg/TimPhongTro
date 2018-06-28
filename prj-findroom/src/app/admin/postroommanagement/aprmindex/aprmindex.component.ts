import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../../_service/room.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { _Status } from '../../../_const/_status';
import { _Enum } from '../../../_const/_enum';

@Component({
  selector: 'app-aprmindex',
  templateUrl: './aprmindex.component.html',
  styleUrls: ['./aprmindex.component.css'],
  providers : [RoomService]
})
export class AprmindexComponent implements OnInit {

  rooms : any[] = [];
  temp_prv: number = _Enum.TPHCM_Id;
  temp_dist: number = _Enum.Quan1_Id;

  //pagination
  p: number = _Enum.Init_page_start;
  
  constructor(private roomService : RoomService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getRoomsByStatus(_Status.Status_waiting);
  }

  getAllRooms(){
    this.roomService.getRoomByQuery2(this.temp_prv,this.temp_dist)
      .subscribe(rms => this.rooms = rms);
  }

  getRoomsByStatus(stt : string){
    this.roomService.getRoomByQuery(this.temp_prv,this.temp_dist,stt).subscribe(rms => this.rooms = rms);
  }
  statusDropDownChanged(val : string){
    if(val == 'all'){
      this.getAllRooms();
    }
    else if(val == _Status.Status_accepted || val == _Status.Status_waiting || val == _Status.Status_refused ||
       val == _Status.Status_locked || val == _Status.Status_removed){
      this.getRoomsByStatus(val);
    }
  }

  goTo(id : string,action : string){
    this.router.navigate(['/a/prm/fb/' + id + '/' + action]);
  }
}
