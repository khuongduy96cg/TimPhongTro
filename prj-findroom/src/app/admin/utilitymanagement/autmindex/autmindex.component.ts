import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../../../_service/utility.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-autmindex',
  templateUrl: './autmindex.component.html',
  styleUrls: ['./autmindex.component.css'],
  providers : [UtilityService]
})
export class AutmindexComponent implements OnInit {

  utilities : any[] = [];
  show : boolean = false;
  showMess : string = 'Xóa';

  //pagination
  p: number = 1;

  constructor(private utilityService : UtilityService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllUtilities();
  }

  getAllUtilities(){
    this.utilityService.getUtilities().subscribe(uls => this.utilities = uls);
  }

  deleteUtility(id){
    this.utilityService.deleteUtility(id).subscribe(() => this.getAllUtilities());
  }

  goTo(){
    this.router.navigate(['/a/utm/add'])
  }
  goUpdate(id){
    this.router.navigate(['/a/utm/update/'+id])
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
