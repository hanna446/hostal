import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { RoomsService } from '../../services/rooms.service';
import { RoomsModel } from '../../models/rooms.models';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
public roomsArray: RoomsModel []=[];

public rom: RoomsModel = {
number: 0,
description:"",
characteristics: "",
aditionalInfo: "",
price: 0
};

  constructor(
    private roomsService:RoomsService,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

onSubmit(f: NgForm) {
  if (!f.valid) {
    return;
  }
  this.roomsService.createRoom(this.rom).subscribe(data =>{
    swal.fire('exito', null, 'success');
    this.getRooms();
  },
  err => {
    swal.fire('You have an error', null, 'error');
  }
  );
}

getRooms(){
  this.roomsService.getRoom().subscribe((data: any) => {
    this.roomsArray = data;
  });
}

deleteRoom(key: string){
this.roomsService.deleteRoom(key).subscribe(data => {
  swal.fire('exito', null, 'success');
  this.getRooms();
},
err => {
  swal.fire('You have an error', null, 'error');
}
);
}

updateRoom(){

}

  logout(){
    this.authService.logout();
  }

}
