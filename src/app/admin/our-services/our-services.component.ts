import { Component, OnInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { ServicesModel } from "../../models/our-services.models";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
    img: []
  };

  constructor(
    private ourServices: OurServicesService,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private toastr: ToastrService
  ) { }

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
          this.serv.img = await ref.getDownloadURL().toPromise();
          this.ourServices.createService(this.serv).subscribe(
            data => {
              this.toastr.success('Success!', 'The service has been created successfully. ');
              f.onReset();
            },
            err => {
              this.toastr.error('Oops', 'You have an error');
            }
          );
        }),
      );

    } else {
      // actualiza
      this.ourServices.updateService(this.serv, this.id).subscribe(
        data => {
          this.toastr.success('Success!', 'The service has been successfully updated. ');
          this.id = "";
          f.onReset();
        },
        err => {
          this.toastr.error('Oops', 'You have an error');
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
        this.toastr.success('Exito!', 'The service has been successfully removed. ');
      },
      err => {
        this.toastr.error('Oops', 'You have an error');
      }
    );
  }

  viewImage(img) {
    this.url = img;
  }
}
