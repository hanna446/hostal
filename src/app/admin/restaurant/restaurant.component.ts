import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { RestaurantModel } from 'src/app/models/restaurant.models';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  id: string;
  imgFile: any;
  url;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  files: File[] = [];
  isHovering: boolean;
  public restaurantArray: RestaurantModel[] = [];
  public rest: RestaurantModel = {
    name: "",
    description: "",
    hours: "",
    price: "",
    img: []
  };

  constructor(
    private restaurant: RestaurantService,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.getRestaurant();
  }

  logout() {
    this.authService.logout();
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

  onSubmit(f: NgForm) {
    if (!f.valid) {
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
          this.rest.img = await ref.getDownloadURL().toPromise();
          this.restaurant.createRestaurant(this.rest).subscribe(
            data => {
             this.toastr.success('Exito!','El servicio ha sido creado con exito ');
            },
            err => {
              this.toastr.error('Oops','You have an error');
            }
          );
        }),
      );

    } else {
      // actualiza
      this.restaurant.updateRestaurant(this.rest, this.id).subscribe(
        data => {
          this.toastr.success('Exito!','El servicio ha sido actualizado con exito ')
          this.id = "";
        },
        err => {
          this.toastr.error('Oops','You have an error');
          this.id = "";
        }
      );
    }
  }

  getRestaurant() {
    /** Se escucha los cambios en la lista.
     * obtiene la data del cambio
     */
 
    this.restaurant.getRestaurantList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => this.restaurantArray = data);
  }

  getUpdate(key) {
    this.id = key;
    this.restaurant
      .getRestaurantById(this.id)
      .subscribe((data: any) => this.rest = data);
  }

  delete(key: string) {
    this.restaurant.deleteRestaurant(key).subscribe(
      data => {
        this.toastr.success('Exito!','El servicio ha sido eliminado con exito ');
      },
      err => {
        this.toastr.error('Oops','You have an error');
      }
    );
  }

  viewImage(img) {
    this.url = img;
  }
}
