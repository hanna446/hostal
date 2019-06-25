import { Component, OnInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { ServicesModel } from "../../models/our-services.models";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"]
})
export class OurServicesComponent implements OnInit {
  id: string;
  imgFile: any;
  url;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  files: File[] = [];
  isHovering: boolean;
  public servicesArray: ServicesModel[] = [];
  public serv: ServicesModel = {
    name: "",
    description: "",
    hours: "",
    price: "",
    img: ""
  };

  constructor(
    private ourServices: OurServicesService,
    private authService: AuthService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getServices();
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
          this.serv.img = await ref.getDownloadURL().toPromise();
          this.ourServices.createService(this.serv).subscribe(
            data => {
              swal.fire("EXITO!", null, "success");
            },
            err => {
              swal.fire("You have an error", null, "error");
            }
          );
        }),
      );

    } else {
      // actualiza
      this.ourServices.updateService(this.serv, this.id).subscribe(
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

  getServices() {
    /** Se escucha los cambios en la lista.
     * obtiene la data del cambio
     */
 
    this.ourServices.getServicesList().snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => this.servicesArray = data);
  }

  getUpdate(key) {
    this.id = key;
    this.ourServices
      .getServiceById(this.id)
      .subscribe((data: any) => this.serv = data);
  }

  delete(key: string) {
    this.ourServices.deleteService(key).subscribe(
      data => {
        swal.fire("exito!", null, "success");
      },
      err => {
        swal.fire("You have an error", null, "error");
      }
    );
  }

  viewImage(img) {
    this.url = img;
  }
}
