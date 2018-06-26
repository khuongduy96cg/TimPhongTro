import { Component, OnInit } from '@angular/core';
import {TypeService} from '../../../_service/type.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-atmindex',
  templateUrl: './atmindex.component.html',
  styleUrls: ['./atmindex.component.css'],
  providers : [TypeService]
})
export class AtmindexComponent implements OnInit {

  types : any[] = [];
  show : boolean = false;
  showMess : string = 'Xóa';

  //pagination
  p: number = 1;

  constructor(private typeService : TypeService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes(){
    this.typeService.getTypes().subscribe(ts => this.types = ts);
  }

  deleteType(id){
    this.typeService.deleteType(id).subscribe(() => this.getTypes());
  }

  goTo(){
    this.router.navigate(['/a/tm/add'])
  }
  goUpdate(id){
    this.router.navigate(['/a/tm/update/'+id])
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
