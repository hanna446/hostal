import { Component, OnInit } from "@angular/core";
import { OurServicesService } from "../../services/our-services.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import swal from "sweetalert2";
import { ServicesModel } from "../../models/our-services.models";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"]
})
export class OurServicesComponent implements OnInit {
  id: string;
  public servicesArray: ServicesModel[] = [];
  public serv: ServicesModel = {
    name: '',
    description: '',
    hours: '',
    price: ''
  };

  constructor(
    private ourServices: OurServicesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getService();
  }

  logout() {
    this.authService.logout();
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    if (!this.id) {
      // guarda
      this.ourServices.createService(this.serv).subscribe(data => {
        swal.fire("EXITO!", null, "success");
        this.getService();
      },
        err => {
          swal.fire("You have an error", null, "error");
        }
      );

    } else {
      // actualiza
      this.ourServices.updateService(this.serv, this.id).subscribe(
        data => {
          swal.fire("Update!", null, "success");
          this.getService();
          this.id = '';
        },
        err => {
          swal.fire("You have an error", null, "error");
          this.id = '';
        }
      );
    }
  }

  getService() {
    this.ourServices.getServices().subscribe((data: any) => this.servicesArray = data);
  }

  getUpdate(serv) {
    this.id = serv;
    this.ourServices.getServiceById(this.id)
      .subscribe((data: any) => this.serv = data);
  }

  delete(key: string) {
    this.ourServices.deleteService(key).subscribe(data => {
      swal.fire("exito!", null, "success");
      this.getService();
    },
      err => {
        swal.fire("You have an error", null, "error");
      }
    );
  }


}
