import { Component, OnInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { AuthService } from "../../services/auth.service";
import { NgForm, FormControl } from "@angular/forms";
import swal from "sweetalert2";
import { ServicesModel } from "../../models/our-services.models";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { Observable } from "rxjs";



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
  imgSrc: any;
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
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getService();
  }

  logout() {
    this.authService.logout();
  }

  onUpload(e: any) {
    // recibe el evento para el archivo
    this.imgFile = e.target.files[0];
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imgSrc = event.target.result;
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    if (!f.valid) {
      return;
    }

    if (!this.id) {
      // guarda
      const fileName = `imgs/${new Date().valueOf().toString()}`;
      const ref = this.storage.ref(fileName);
      this.task = this.storage.upload(fileName, this.imgFile);

      this.task.snapshotChanges().subscribe(
        // The file's download URL
        (async () => {
          this.serv.img = await ref.getDownloadURL().toPromise();
          this.ourServices.createService(this.serv).subscribe(
            data => {
              swal.fire("EXITO!", null, "success");
              this.getService();
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
          this.getService();
          this.id = "";
        },
        err => {
          swal.fire("You have an error", null, "error");
          this.id = "";
        }
      );
    }
  }

  getService() {
    this.ourServices
      .getServices()
      .subscribe((data: any) => (this.servicesArray = data));
  }

  getUpdate(serv) {
    this.id = serv;
    this.ourServices
      .getServiceById(this.id)
      .subscribe((data: any) => (this.serv = data));
  }

  delete(key: string) {
    this.ourServices.deleteService(key).subscribe(
      data => {
        swal.fire("exito!", null, "success");
        this.getService();
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
