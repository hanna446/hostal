import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostal-services',
  templateUrl: './hostal-services.component.html',
  styleUrls: ['./hostal-services.component.css']
})
export class HostalServicesComponent implements OnInit {

  public pathImage: string;

  constructor() {
    this.pathImage = 'assets/images/bg_3.jpg';
   }

  ngOnInit() {
  }

}
