import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../services/auth.service";
import { RoomsService } from "../../services/rooms.service";
import { RoomsModel } from "../../models/rooms.models";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { CategoriesService } from "../../services/categories.service";
import { CategoryModels } from "../../models/category.models";
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {
  id: string;
  url;
  imgSrc: any;
  imgFile: any;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  isHovering: boolean;
  files: File[] = [];
  public categoriesArray: CategoryModels[] = [];
  public roomsArray: RoomsModel[] = [];
  public rom: RoomsModel = {
    categoryName: '',
    number: 0,
    description: "",
    characteristics: "",
    aditionalInfo: "",
    price: 0,
    img: []
  };

  constructor(
    private roomsService: RoomsService,
    private storage: AngularFireStorage,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.getRooms();
    this.getCategories();
  }

  getUpdate(key) {
    this.id = key;
    this.roomsService
      .getRoomById(this.id)
      .subscribe((data: any) => this.rom = data);
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    if (!this.id) {
      // guarda
      this.roomsService.createRoom(this.rom).subscribe(
        data => {
         this.toastr.success('Exito!','La habitación ha sido creada con exito');
        },
        err => {
          this.toastr.error('Oops!','You have an error');
        }
      );

    } else {
      // actualiza
      this.roomsService.updateRoom(this.rom, this.id).subscribe(
        data => {
          this.toastr.success('Exito!','La habitación ha sido actualizada con exito');
          this.id = "";
        },
        err => {
          this.toastr.error('Oops!','You have an error');
          this.id = "";
        }
      );
    }
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    // recibe los archivos
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }


  getRooms() {
    this.roomsService.getRoomsList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => this.roomsArray = data);
  }

  getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((data: any) => this.categoriesArray = data);
  }

  deleteRoom(key: string) {
    this.roomsService.deleteRoom(key).subscribe(
      data => {
        this.toastr.success('Exito!','La habitación ha sido eliminada con exito');
      },
      err => {
        this.toastr.error('Oops!','You have an error');
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
