import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from '../Json/jsonservice.service';
import { LocalServiceService } from '../local-service.service';
import { formval } from '../rform/rform.component';


@Component({
  selector: 'app-user-porfile',
  templateUrl: './user-porfile.component.html',
  styleUrls: ['./user-porfile.component.css']
})
export class UserPorfileComponent implements OnInit {


  users: formval[];

  constructor(public getuser: JsonserviceService, private _LocalServiceService: LocalServiceService) {
    //this.users = getuser._allData;
  }
  
  ngOnInit(): void {
    //this.getuser.getalluser().subscribe((data) => {
    //  console.log(data);
    //  this.users.push(data);
    //});
    this.users = this._LocalServiceService.getalluser();
    console.log(this.users);
  }
  editprofile() {

  }
  editphoto() {

  }
}
