import { Component, OnInit } from '@angular/core';
import {DistrictService} from '../../../_service/district.service';
import {WardService} from '../../../_service/ward.service';
import {ProvinceService} from '../../../_service/province.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-awmindex',
  templateUrl: './awmindex.component.html',
  styleUrls: ['./awmindex.component.css'],
  providers : [DistrictService, WardService,ProvinceService]
})
export class AwmindexComponent implements OnInit {

  districts : any[] = [];
  wards : any[] = [];
  provinces : any[] = [];

  show : boolean = false;
  showMess : string = 'Xóa';

  idprvtemp : number = -1;
  iddistemp : number = -1;

  //pagination
  p: number = 1;

  constructor(private districtService : DistrictService, private wardService : WardService, private provinceService : ProvinceService,
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

  getWardsByDistrictId(did : number){
    this.wardService.getWardsByDistrictId(did).subscribe(ws => this.wards = ws);
  }

  provinceDropDownChanged(val : number){
    this.idprvtemp = val;
    this.districts = this.wards = [];
    this.getDistrictsByProvinceId(val);
  }
  districtDropDownChanged(val : number){
    this.iddistemp = val;
    this.getWardsByDistrictId(val);
  }

  deleteWard(id){
    this.wardService.deleteWard(id).subscribe(() => this.getWardsByDistrictId(this.iddistemp));
  }

  goTo(){
    this.router.navigate(['/a/wm/add']);
  }

  goUpdate(id){
    this.router.navigate(['/a/wm/update/' + id]);
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
