import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public formQuote = {
    dateIn: "",
    dateOut: "",
    room: ""
  };
  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: any) {
    if (type.indexOf('changeIn')) {
      this.formQuote.dateOut = event.value;
      console.log(this.formQuote.dateOut);
    } else {
      this.formQuote.dateIn = event.value;
      console.log("hola",this.formQuote.dateIn);
    }
  }

}
