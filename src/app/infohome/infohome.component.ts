import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-infohome',
  templateUrl: './infohome.component.html',
  styleUrls: ['./infohome.component.css']
})
export class InfohomeComponent implements OnInit {
message;
  constructor(public _guestService:GuestService) { }

  ngOnInit() {
  	this._guestService.getMessage().subscribe(res=>{
  		console.log(res);
  		this.message=res[0].message;

  	},error=>{
  		console.log(error);
  	});

  }

}
