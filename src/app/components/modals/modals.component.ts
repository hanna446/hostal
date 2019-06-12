import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: []
})
export class ModalsComponent implements OnInit {

  @Input() img: any;

  constructor() { }

  ngOnInit() {
  }

}
