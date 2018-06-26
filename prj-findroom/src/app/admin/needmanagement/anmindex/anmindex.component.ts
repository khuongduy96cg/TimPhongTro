import { Component, OnInit } from '@angular/core';
import {NeedService} from '../../../_service/need.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-anmindex',
  templateUrl: './anmindex.component.html',
  styleUrls: ['./anmindex.component.css'],
  providers : [NeedService]
})
export class AnmindexComponent implements OnInit {

  needs : any[] = [];
  show : boolean = false;
  showMess : string = 'Xóa';

  //pagination
  p: number = 1;

  constructor(private needService : NeedService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getNeeds();
  }

  getNeeds(){
    this.needService.getNeeds().subscribe(ns => this.needs = ns);
  }

  deleteNeed(id){
    this.needService.deleteNeed(id).subscribe(() => this.getNeeds());
  }

  goTo(){
    this.router.navigate(['/a/nm/add'])
  }
  goUpdate(id){
    this.router.navigate(['/a/nm/update/'+id])
  }

  showDeleteButton(){
    this.show = !this.show;
    
    if(this.show){
      this.showMess = 'Hủy';
    }
    else {
      this.showMess = 'Xóa';
    }
  }
}
