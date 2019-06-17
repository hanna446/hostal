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

  public categoriesArray: CategoryModels[] = [];
  public roomsArray: RoomsModel[] = [];
  public rom: RoomsModel = {
    categoryName: '',
    number: 0,
    description: "",
    characteristics: "",
    aditionalInfo: "",
    price: 0,
    img: ""
  };

  constructor(
    private roomsService: RoomsService,
    private authService: AuthService,
<<<<<<< HEAD
    private categoriesService: CategoriesService,
    private storage: AngularFireStorage
  ) {}
=======
    private categoriesService: CategoriesService
  ) { }
>>>>>>> 620433233856ce4ff364da856ab3e82002987cc7

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

<<<<<<< HEAD
    if (!this.id) {      
      // guarda    
      const fileName = `imgs/${new Date().valueOf().toString()}`;
      const ref = this.storage.ref(fileName);
      this.task = this.storage.upload(fileName, this.imgFile);
      this.task.snapshotChanges().subscribe(//Escuchar a la variable Task (sube los archivos) y se suscribe
        (async () => {
          this.rom.img = await ref.getDownloadURL().toPromise();//se guarda la url en "img"
          this.roomsService.createRoom(this.rom).subscribe(
            data => {
              swal.fire("exito", null, "success");
              this.getRooms();
            },
            err => {
              swal.fire("You have an error", null, "error");
            }
          );
        })
        );
=======
    if (!this.id) {
      // guarda
      this.roomsService.createRoom(this.rom).subscribe(
        data => {
          swal.fire("exito", null, "success");
        },
        err => {
          swal.fire("You have an error", null, "error");
        }
      );
>>>>>>> 620433233856ce4ff364da856ab3e82002987cc7
    } else {
      // actualiza
      this.roomsService.updateRoom(this.rom, this.id).subscribe(
        data => {
          swal.fire("Update!", null, "success");
          this.id = "";
        },
        err => {
          swal.fire("You have an error", null, "error");
          this.id = "";
        }
      );
    }
  }

  getRooms() {
    this.roomsService.getRoomsList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ... c.payload.val()})
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
        swal.fire("exito", null, "success");
      },
      err => {
        swal.fire("You have an error", null, "error");
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
