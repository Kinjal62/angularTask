import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contact = {name:"",email:"",phone:"",message:""};
  constructor(public _guestService:GuestService) { }

  ngOnInit() {
  	
  	
  }

  addData(){
  	console.log(this.contact);
  	this._guestService.getContact(this.contact).subscribe(res=>{
  		console.log(res);
  	},error=>{
  		console.log(error);
  	});
  }

}
