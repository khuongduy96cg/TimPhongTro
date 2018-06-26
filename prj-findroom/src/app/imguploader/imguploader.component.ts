import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';
import {UploadFileService} from '../_service/uploadfile.service';

@Component({
  selector: 'app-imguploader',
  templateUrl: './imguploader.component.html',
  styleUrls: ['./imguploader.component.css'],
  providers : [UploadFileService]
})
export class ImguploaderComponent implements OnInit {

  imagepath : any[] = [];
  res: string;
  _body: string;
  filepath: string;
  filename : string;
  constructor(private uploadFileService : UploadFileService) { }

  ngOnInit() {
    
  }

  onUploadFinished(file: FileHolder) {
    console.log('onUploadFinished');
    //get response
    this.res = JSON.stringify(file.serverResponse);
    this._body = JSON.parse(this.res)._body;
    this.filepath = JSON.parse(this._body).filepath;
    //add to array
    this.imagepath.push(this.filepath);
    console.log(this.imagepath);
  }
  
  onRemoved(file: FileHolder) {
    console.log('onRemoved');
    //get response
    this.res = JSON.stringify(file.serverResponse);
    this._body = JSON.parse(this.res)._body;
    this.filepath = JSON.parse(this._body).filepath;
    this.filename = JSON.parse(this._body).filename;

    //remove from service
    this.uploadFileService.removeFile(this.filename).subscribe(kq => console.log(kq));

    //remove from array
    let index = this.imagepath.indexOf(this.filepath);
    this.imagepath.splice(index,1);
    console.log(this.imagepath);
  }
  
  onUploadStateChanged(state: boolean) {
    console.log('onUploadStateChanged');
    console.log(state);
  }
  
}
