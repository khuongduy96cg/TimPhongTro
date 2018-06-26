import { Component, OnInit } from '@angular/core';
import {ProvinceService} from '../../../_service/province.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-apmindex',
  templateUrl: './apmindex.component.html',
  styleUrls: ['./apmindex.component.css'],
  providers : [ProvinceService]
})
export class ApmindexComponent implements OnInit {


  provinces : any[] = [];
  show : boolean = false;
  showMess : string = 'Xóa';

  //pagination
  p: number = 1;

  constructor(private provinceService : ProvinceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllProvinces();
  }

  getAllProvinces(){
    this.provinceService.getAllProvinces().subscribe(pvs => this.provinces = pvs);
  }

  deleteProvince(id){
    this.provinceService.deleteProvince(id).subscribe(() => this.getAllProvinces());
  }

  goTo(){
    this.router.navigate(['/a/pm/add'])
  }
  goUpdate(id){
    this.router.navigate(['/a/pm/update/'+id])
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
