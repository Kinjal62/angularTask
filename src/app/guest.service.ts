import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(public http:HttpClient) { }
getMessage(){
	return this.http.get("https://my.api.mockaroo.com/adminmessage.json?key=41385520");
}
getContact(body){
	 return this.http.post("https://my.api.mockaroo.com/contact.json?key=41385520&__method=POST", body);
}

}
