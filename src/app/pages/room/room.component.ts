import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { RoomsModel } from '../../models/rooms.models';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: RoomsModel[] = [];
  public formQuote = {
    dateIn: "",
    dateOut: "",
    room: ""
  };
  constructor(private roomService: RoomsService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRoom()
      .subscribe((data: any) => {
        this.rooms = data;
      });
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
