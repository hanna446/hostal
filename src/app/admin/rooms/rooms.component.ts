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
  id: string;
  url;
  imgSrc: any;
  public roomsArray: RoomsModel[] = [];
  public rom: RoomsModel = {
    number: 0,
    description: "",
    characteristics: "",
    aditionalInfo: "",
    price: 0,
    img: ''
  };

  constructor(
    private roomsService: RoomsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getRooms();
  }

  getUpdate(rom) {
    this.id = rom;
    this.roomsService.getRoomById(this.id)
      .subscribe((data: any) => this.rom = data);
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    if (!this.id) {
      // guarda
      this.roomsService.createRoom(this.rom).subscribe(data => {
        swal.fire('exito', null, 'success');
        this.getRooms();
      },
        err => {
          swal.fire('You have an error', null, 'error');
        }
      );

    } else {
      // actualiza
      this.roomsService.updateRoom(this.rom, this.id).subscribe(data => {
        swal.fire('Update!', null, 'success');
        this.getRooms();
        this.id = '';
      },
        err => {
          swal.fire('You have an error', null, 'error');
          this.id = '';
        });
    }
  }

  getRooms() {
    this.roomsService.getRoom().subscribe((data: any) => this.roomsArray = data);
  }

  deleteRoom(key: string) {
    this.roomsService.deleteRoom(key).subscribe(data => {
      swal.fire('exito', null, 'success');
      this.getRooms();
    },
      err => {
        swal.fire('You have an error', null, 'error');
      }
    );
  }

  viewImage(img) {
    this.url = img;
  }
  
  logout() {
    this.authService.logout();
  }


}
