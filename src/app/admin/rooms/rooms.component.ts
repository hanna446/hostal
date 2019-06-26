import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { RoomsService } from "../../services/rooms.service";
import { RoomsModel } from "../../models/rooms.models";
import { NgForm } from "@angular/forms";
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
      // validated
      this.toastr.info('Warning!', 'please fill in the missing fields');
      return;
    }

    if (!this.id) {
      // guarda
      const fileName = `imgs/${new Date().valueOf().toString()}`;
      const ref = this.storage.ref(fileName);
      this.task = this.storage.upload(fileName, this.files[0]);


      this.task.snapshotChanges().subscribe(
        // The file's download URL
        (async () => {
          this.rom.img = await ref.getDownloadURL().toPromise();
          this.roomsService.createRoom(this.rom).subscribe(
            data => {
              f.onReset();
              this.toastr.success('Success!', 'The room has been successfully created.');
            },
            err => {
              this.toastr.error('Oops!', 'You have an error');
            }
          );
        }),
      );

    } else {
      // actualiza
      this.roomsService.updateRoom(this.rom, this.id).subscribe(
        data => {
          this.toastr.success('Success!', 'The room has been successfully updated');
          this.id = "";
          f.onReset();
        },
        err => {
          this.toastr.error('Oops!', 'You have an error');
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
        this.toastr.success('Sucess!', 'The room has been successfully removed');
      },
      err => {
        this.toastr.error('Oops!', 'You have an error');
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
