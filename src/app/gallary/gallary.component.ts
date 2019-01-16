import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
img = ['assets/images/img1.jpg','assets/images/img2.jpg','assets/images/img3.jpg','assets/images/img4.jpg','assets/images/img5.jpg']
  constructor() { }

  ngOnInit() {
  }

}
