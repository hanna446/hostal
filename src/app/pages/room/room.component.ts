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

}
