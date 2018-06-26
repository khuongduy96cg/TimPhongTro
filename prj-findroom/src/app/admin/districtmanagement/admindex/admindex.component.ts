import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../../_service/district.service';
import {ProvinceService} from '../../../_service/province.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admindex',
  templateUrl: './admindex.component.html',
  styleUrls: ['./admindex.component.css'],
  providers : [DistrictService,ProvinceService]
})
export class AdmindexComponent implements OnInit {

  districts : any[] = [];
  provinces : any[] = [];

  show : boolean = false;
  showMess : string = 'Xóa';

  idpvtemp : number = -1;
  //pagination
  p: number = 1;

  constructor(private districtService : DistrictService, private provinceService : ProvinceService,
              private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getAllProvinces();
  }

  getAllProvinces(){
    this.provinceService.getAllProvinces().subscribe(pvs => this.provinces = pvs);
  }
  getDistrictsByProvinceId(pid: number){
    this.districtService.getDistrictsByProvinceId(pid).subscribe(ds => this.districts = ds);
  }
  provinceDropDownChanged(val : number){
    this.idpvtemp = val;
    this.getDistrictsByProvinceId(val);
  }

  deleteDistrict(id){
    this.districtService.deleteDistrict(id).subscribe(() => this.getDistrictsByProvinceId(this.idpvtemp));
  }


  goTo(){
    this.router.navigate(['/a/dm/add']);
  }

  goUpdate(id){
    this.router.navigate(['/a/dm/update/' + id]);
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
